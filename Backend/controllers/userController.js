const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const keysecret = process.env.KEYSECRET;

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Register
exports.register = async (req, res) => {
  try {
    const {
      fname,
      email,
      mobile,
      password,
      role,
    } = req.body;

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await User.create({
      fname,
      email,
      mobile,
      password,
      role,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// Admin Login (Email + Password)
exports.login = async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    // Customers cannot use password login
    if (user.role !== "admin") {
      return res.status(400).json({
        message:
          "Customers must login using OTP.",
      });
    }

    const isMatch =
      await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const token =
      await user.generateAuthToken();

    res.cookie("ecommerce", token, {
      httpOnly: true,
      expires: new Date(
        Date.now() +
        24 * 60 * 60 * 1000
      ),
      sameSite: "strict",
      secure:
        process.env.NODE_ENV ===
        "production",
    });

    res.status(200).json({
      success: true,
      message: "Admin Login Successful",
      user: {
        _id: user._id,
        fname: user.fname,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
        cart: user.cart,
        wishlist: user.wishlist,
      },
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// Send OTP (Customer Login)
exports.sendLoginOtp = async (
  req,
  res
) => {
  try {
    const { email } = req.body;

    const user =
      await User.findOne({
        email,
      });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Admins should use password login
    if (user.role !== "customer") {
      return res.status(400).json({
        message:
          "Admins must login using password.",
      });
    }

    // Secure 6-digit OTP
    const otp = crypto
      .randomInt(100000, 1000000)
      .toString();

    // Store hashed OTP
    user.otp = await bcrypt.hash(
      otp,
      10
    );

    user.otpExpires = new Date(
      Date.now() + 5 * 60 * 1000
    );

    await user.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Login OTP",
      html: `
        <h2>Amazon Clone Login OTP</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP is valid for 5 minutes.</p>
      `,
    });

    res.status(200).json({
      success: true,
      message:
        "OTP sent successfully to your email.",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// Verify OTP (Customer Login)
exports.verifyLoginOtp = async (
  req,
  res
) => {
  try {
    const {
      email,
      otp,
    } = req.body;

    const user =
      await User.findOne({
        email,
      });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (
      !user.otp ||
      !user.otpExpires ||
      user.otpExpires <
      new Date()
    ) {
      return res.status(400).json({
        message:
          "OTP expired. Please request a new OTP.",
      });
    }

    const validOtp =
      await bcrypt.compare(
        otp,
        user.otp
      );

    if (!validOtp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    // Clear OTP after successful login
    user.otp = null;
    user.otpExpires = null;

    await user.save();

    const token =
      await user.generateAuthToken();

    res.cookie("ecommerce", token, {
      httpOnly: true,
      expires: new Date(
        Date.now() +
        24 * 60 * 60 * 1000
      ),
      sameSite: "strict",
      secure:
        process.env.NODE_ENV ===
        "production",
    });

    res.status(200).json({
      success: true,
      message:
        "Customer Login Successful",
      user: {
        _id: user._id,
        fname: user.fname,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
        cart: user.cart,
        wishlist: user.wishlist,
      },
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// Profile
exports.profile = async (
  req,
  res
) => {
  res.json({
    _id: req.user._id,
    fname: req.user.fname,
    email: req.user.email,
    mobile: req.user.mobile,
    role: req.user.role,
    cart: req.user.cart,
    wishlist: req.user.wishlist,
  });
};

// Logout
exports.logout = async (
  req,
  res
) => {
  try {
    req.user.tokens =
      req.user.tokens.filter(
        (curr) =>
          curr.token !== req.token
      );

    await req.user.save();

    res.clearCookie(
      "ecommerce"
    );

    res.status(200).json({
      message: "Logged out",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};