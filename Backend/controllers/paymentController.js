const crypto = require("crypto");
const Razorpay = require("razorpay");

const User = require("../models/userSchema");
const Product = require("../models/productsSchema");
const Order = require("../models/ordersSchema");
const Payment = require("../models/paymentSchema");

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/**
 * Create Razorpay Order
 */
exports.createRazorpayOrder = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate("cart.product");

        if (!user || user.cart.length === 0) {
            return res.status(400).json({
                message: "Cart is empty",
            });
        }

        let total = 0;

        for (const item of user.cart) {
            const product = item.product;

            if (!product) {
                return res.status(404).json({
                    message: "Product not found",
                });
            }

            if (product.stock < item.quantity) {
                return res.status(400).json({
                    message: `${product.name} has insufficient stock`,
                });
            }

            total += product.price.cost * item.quantity;
        }

        const razorpayOrder = await razorpay.orders.create({
            amount: Math.round(total * 100), // paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        });
        console.log(razorpayOrder)

        return res.json({
            razorpayOrder,
        });
    } catch (error) {
        console.error("ERROR:", error);
        return res.status(500).json({
            error: error.message,
        });
    }
};

/**
 * Verify payment and create final order
 */
exports.verifyPayment = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        } = req.body;

        const generatedSignature = crypto
            .createHmac(
                "sha256",
                process.env.RAZORPAY_KEY_SECRET
            )
            .update(
                `${razorpay_order_id}|${razorpay_payment_id}`
            )
            .digest("hex");

        if (generatedSignature !== razorpay_signature) {
            return res.status(400).json({
                message: "Invalid payment signature",
            });
        }

        const user = await User.findById(req.user._id).populate("cart.product");

        if (!user || user.cart.length === 0) {
            return res.status(400).json({
                message: "Cart is empty",
            });
        }

        let totalAmount = 0;
        const orderProducts = [];

        // Re-check stock and prepare order items
        for (const item of user.cart) {
            const product = await Product.findById(item.product._id);

            if (!product) {
                return res.status(404).json({
                    message: "Product not found",
                });
            }

            if (product.stock < item.quantity) {
                return res.status(400).json({
                    message: `${product.name} is out of stock`,
                });
            }

            totalAmount += product.price.cost * item.quantity;

            orderProducts.push({
                product: product._id,
                quantity: item.quantity,
                price: product.price.cost,
            });
        }

        const {
            shippingAddress,
        } = req.body;

        // Create order
        const order = await Order.create({
            user: user._id,
            products: orderProducts,
            totalAmount,
            shippingAddress,
            paymentStatus: "Paid",
            orderStatus: "Confirmed",
        });

        // Create payment record
        const payment = await Payment.create({
            user: user._id,
            order: order._id,
            amount: totalAmount,
            paymentMethod: "RAZORPAY",
            paymentStatus: "Success",
            razorpayOrderId: razorpay_order_id,
            razorpayPaymentId: razorpay_payment_id,
            razorpaySignature: razorpay_signature,
        });

        // Link payment to order
        order.payment = payment._id;
        await order.save();

        // Reduce stock
        for (const item of user.cart) {
            const product = await Product.findById(item.product._id);

            product.stock -= item.quantity;

            if (product.stock <= 0) {
                product.stock = 0;
                product.isOutOfStock = true;
            }

            await product.save();
        }

        // Clear cart
        user.cart = [];
        await user.save();

        return res.status(200).json({
            success: true,
            orderId: order._id,
            paymentId: payment._id,
            message: "Payment verified and order created",
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

/**
 * get all payments
 */

exports.getAllPayments = async (req, res) => {
    try {
        if (req.user.role !== "admin") {
            return res.status(403).json({
                message: "Access denied",
            });
        }

        const payments = await Payment.find()
            .populate("user", "fname email")
            .populate("order")
            .sort({ createdAt: -1 });

        res.json(payments);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};