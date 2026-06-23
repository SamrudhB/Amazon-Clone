const Order = require("../models/ordersSchema");
const Product = require("../models/productsSchema");
const User = require("../models/userSchema");

/**
 * Create a pending order.
 * Payment verification should happen later.
 */
exports.createOrder = async (req, res) => {
    try {
        const {
            products,
            shippingAddress,
        } = req.body;

        if (!products || products.length === 0) {
            return res.status(400).json({
                message: "No products provided",
            });
        }

        let totalAmount = 0;
        const orderProducts = [];

        for (const item of products) {
            const product = await Product.findById(item.product);

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

            orderProducts.push({
                product: product._id,
                quantity: item.quantity,
                price: product.price.cost,
            });

            totalAmount +=
                product.price.cost * item.quantity;
        }

        const estimatedDelivery = new Date();
        estimatedDelivery.setDate(
            estimatedDelivery.getDate() + 5
        );

        const order = await Order.create({
            user: req.user._id,

            products: orderProducts,

            totalAmount,

            shippingAddress,

            paymentStatus: "Pending",

            orderStatus: "Pending",

            estimatedDelivery,
        });

        return res.status(201).json(order);
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

/**
 * Fetch all orders of logged in user
 */

exports.getMyOrders = async (req, res) => {
    try {
        let orders;

        if (req.user.role === "admin") {
            orders = await Order.find()
                .populate("user", "fname email")
                .populate("payment")
                .populate({
                    path: "products.product",
                })
                .sort({ createdAt: -1 });
        } else {
            orders = await Order.find({
                user: req.user._id,
            })
                .populate({
                    path: "products.product",
                })
                .populate("payment")
                .sort({ createdAt: -1 });
        }

        res.json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
};

/**
 * Get single order details
 */
exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findOne({
            _id: req.params.id,
            user: req.user._id,
        })
            .populate({
                path: "products.product",
            })
            .populate("payment");

        if (!order) {
            return res.status(404).json({
                message: "Order not found",
            });
        }

        return res.json(order);
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

/**
 * Cancel order
 */
exports.cancelOrder = async (req, res) => {
    try {
        const order = await Order.findOne({
            _id: req.params.id,
            user: req.user._id,
        });

        if (!order) {
            return res.status(404).json({
                message: "Order not found",
            });
        }

        if (order.orderStatus === "Cancelled") {
            return res.status(400).json({
                message: "Order already cancelled",
            });
        }

        if (order.orderStatus === "Delivered") {
            return res.status(400).json({
                message:
                    "Delivered orders cannot be cancelled",
            });
        }

        /*
            Restore stock only if payment succeeded.
            Otherwise nothing was deducted.
        */

        if (order.paymentStatus === "Paid") {
            for (const item of order.products) {
                const product =
                    await Product.findById(item.product);

                if (!product) continue;

                product.stock += item.quantity;

                if (product.stock > 0) {
                    product.isOutOfStock = false;
                }

                await product.save();
            }
        }

        order.orderStatus = "Cancelled";

        await order.save();

        return res.json({
            message: "Order cancelled successfully",
            order,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

/**
 * get all orders
 */

exports.getAllOrders = async (req, res) => {
    try {
        if (req.user.role !== "admin") {
            return res.status(403).json({
                message: "Access denied",
            });
        }

        const orders = await Order.find()
            .populate("user", "fname email")
            .populate({
                path: "products.product",
                select: "name images price",
            })
            .populate("payment")
            .sort({ createdAt: -1 });

        return res.json(orders);
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};
