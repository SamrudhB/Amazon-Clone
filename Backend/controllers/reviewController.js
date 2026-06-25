const Review = require("../models/reviewSchema");
const Order = require("../models/ordersSchema");
const Product = require("../models/productsSchema");

exports.addReview = async (req, res) => {
    try {

        const { productId, rating, comment } = req.body;

        // Check whether the user has purchased this product
        const purchasedOrder = await Order.findOne({
            user: req.user._id,
            orderStatus: "Delivered", // You can change this to "Delivered"
            products: {
                $elemMatch: {
                    product: productId,
                },
            },
        });

        if (!purchasedOrder) {
            return res.status(403).json({
                message:
                    "You can review this product only after your order is confirmed.",
            });
        }

        // Prevent duplicate reviews
        const existingReview = await Review.findOne({
            user: req.user._id,
            product: productId,
        });

        if (existingReview) {
            return res.status(400).json({
                message: "Review already submitted",
            });
        }

        // Create review
        const review = await Review.create({
            user: req.user._id,
            product: productId,
            rating,
            comment,
        });

        // Recalculate average rating
        const reviews = await Review.find({
            product: productId,
        });

        const totalRating = reviews.reduce(
            (sum, item) => sum + item.rating,
            0
        );

        const averageRating = totalRating / reviews.length;

        await Product.findByIdAndUpdate(productId, {
            averageRating,
            totalReviews: reviews.length,
        });

        return res.status(201).json(review);

    } catch (error) {

        return res.status(500).json({
            error: error.message,
        });

    }
};

exports.getReviews = async (req, res) => {
    try {

        const reviews = await Review.find({
            product: req.params.productId,
        })
            .populate("user", "fname")
            .populate("product");

        res.json(reviews);

    } catch (error) {

        res.status(500).json({
            error: error.message,
        });

    }
};