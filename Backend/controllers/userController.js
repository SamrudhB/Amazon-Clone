const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const keysecret = process.env.KEYSECRET;

exports.register = async (req, res) => {
  try {
    const {
      fname,
      email,
      mobile,
      password,
      role
    } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const user = await User.create({
      fname,
      email,
      mobile,
      password,
      role
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

exports.login = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid Credentials"
      });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Credentials"
      });
    }

    const token = await user.generateAuthToken();

    res.cookie("ecommerce", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production"
    });

    // res.status(200).json({
    //   success: true,
    //   message: "Login Successful",
    //   user
    // });
    res.status(200).json({
  success: true,
  message: "Login Successful",
  user: {
    _id: user._id,
    fname: user.fname,
    email: user.email,
    mobile: user.mobile,
    role: user.role,
    cart: user.cart,
    wishlist: user.wishlist,
  }
});

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

exports.profile =
async(req,res)=>{

    // res.json(req.user);
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

exports.logout = async (req, res) => {

    try {

        req.user.tokens = req.user.tokens.filter(
            (curr) => curr.token !== req.token
        );

        await req.user.save();

        res.clearCookie("ecommerce");

        res.status(200).json({
            message: "Logged out"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};