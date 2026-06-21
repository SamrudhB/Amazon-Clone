const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        order: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
        },

        amount: {
            type: Number,
            required: true,
        },

        paymentMethod: {
            type: String,
            enum: ["COD", "CARD", "UPI", "RAZORPAY"],
            default: "RAZORPAY",
        },

        paymentStatus: {
            type: String,
            enum: ["Pending", "Success", "Failed"],
            default: "Pending",
        },

        razorpayOrderId: String,

        razorpayPaymentId: String,

        razorpaySignature: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Payment", paymentSchema);