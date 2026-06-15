const Review =
    require("../models/reviewSchema");

const Order =
    require("../models/ordersSchema");

const Product =
    require("../models/productsSchema");

const User =
    require("../models/userSchema");

//review should be added only after that product order is confirmed
exports.addReview =
    async (req, res) => {

        try {

            const {
                productId,
                rating,
                comment
            } = req.body;

            const existingReview =
                await Review.findOne({

                    user: req.user._id,

                    product: productId

                });

            if (existingReview) {

                return res.status(400)
                    .json({

                        message:
                            "Review already submitted"

                    });
            }

            const review =
                await Review.create({

                    user: req.user._id,

                    product: productId,

                    rating,

                    comment

                });

            const reviews =
                await Review.find({
                    product: productId
                });

            const avg =
                reviews.reduce(
                    (sum, item) =>
                        sum + item.rating,
                    0
                ) / reviews.length;

            await Product.findByIdAndUpdate(
                productId,
                {
                    averageRating: avg,
                    totalReviews: reviews.length
                }
            );

            res.status(201).json(review);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    };

exports.getReviews =
    async (req, res) => {

        try {

            const reviews =
                await Review.find({
                    product: req.params.productId
                })
                    .populate("user", "fname")
                    .populate("product");

            res.json(reviews);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    };