const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },

                quantity: {
                    type: Number,
                    required: true,
                },

                price: {
                    type: Number,
                    required: true,
                },
            },
        ],

        totalAmount: {
            type: Number,
            required: true,
        },

        shippingAddress: {
            fullName: String,
            mobile: String,
            address: String,
            city: String,
            state: String,
            pincode: String,
            country: String,
        },

        paymentMethod: {
            type: String,
            default: "Razorpay",
        },

        paymentStatus: {
            type: String,
            enum: ["Pending", "Paid", "Failed"],
            default: "Pending",
        },

        payment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Payment",
        },

        razorpayOrderId: String,

        razorpayPaymentId: String,

        razorpaySignature: String,

        orderStatus: {
            type: String,
            enum: [
                "Pending",
                "Confirmed",
                "Packed",
                "Shipped",
                "Out For Delivery",
                "Delivered",
                "Cancelled",
            ],
            default: "Pending",
        },

        estimatedDelivery: Date,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Order", orderSchema);