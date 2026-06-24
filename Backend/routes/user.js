const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
    register,
    login,
    sendLoginOtp,
    verifyLoginOtp,
    profile,
    logout,
} = require("../controllers/userController");

router.post("/register", register);

// Admin Login (Email + Password)
router.post("/login", login);

// Customer Login - Send OTP
router.post("/send-login-otp", sendLoginOtp);

router.post("/verify-login-otp", verifyLoginOtp);

router.get("/profile", auth, profile);

router.post("/logout", auth, logout);

module.exports = router;