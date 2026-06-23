const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const adminAuth =
    require("../middleware/adminAuth");
const paymentController = require("../controllers/paymentController");

router.post(
    "/create-order",
    auth,
    paymentController.createRazorpayOrder
);

router.post(
    "/verify",
    auth,
    paymentController.verifyPayment
);

router.get(
    "/admin",
    auth,
    adminAuth,
    paymentController.getAllPayments
);

module.exports = router;