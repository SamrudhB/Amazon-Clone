const User = require("../models/userSchema");
const Product = require("../models/productsSchema");

exports.addToCart = async (req, res) => {

    try {

        const { productId } = req.body;

        const product =
            await Product.findById(productId);

        if (!product) {

            return res.status(404).json({
                message: "Product not found"
            });
        }
        if (product.stock <= 0 || product.isOutOfStock) {
            return res.status(400).json({
                message: "Out of stock"
            });
        }

        const user =
            await User.findById(req.user._id);

        const itemExists =
            user.cart.find(item =>
                item.product.toString() === productId
            );

        if (itemExists) {

            if (
                itemExists.quantity + 1 >
                product.stock
            ) {

                return res.status(400)
                    .json({
                        message: "Insufficient stock"
                    });

            }

            itemExists.quantity += 1;

        } else {

            user.cart.push({

                product: productId,

                quantity: 1

            });

        }

        await user.save();

        res.json({
            message: "Added to cart"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};

exports.getCart =
    async (req, res) => {

        try {

            const user =
                await User.findById(req.user._id)
                    .populate("cart.product");

            res.json(user.cart);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    };

exports.updateCart =
    async (req, res) => {

        try {

            const {
                productId,
                quantity
            } = req.body;

            const user =
                await User.findById(req.user._id);
            const product =
                await Product.findById(productId);

            if (product.stock <= 0 || product.isOutOfStock) {
                return res.status(400).json({
                    message: "Out of stock"
                });
            }

            if (quantity > product.stock || product.stock <= 0) {
                return res.status(400).json({
                    message: "Insufficient stock"
                });
            }

            const item =
                user.cart.find(

                    item =>
                        item.product.toString() === productId

                );

            if (!item) {

                return res.status(404).json({
                    message: "Item not found"
                });
            }

            item.quantity = quantity;

            await user.save();

            res.json({
                message: "Quantity updated"
            });

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    };

exports.removeFromCart =
    async (req, res) => {

        try {

            const { productId } = req.params;

            const user =
                await User.findById(req.user._id);

            user.cart =
                user.cart.filter(

                    item =>
                        item.product.toString() !== productId

                );

            await user.save();

            res.json({
                message: "Removed from cart"
            });

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    };

exports.cartSummary =
    async (req, res) => {

        try {

            const user =
                await User.findById(req.user._id)
                    .populate("cart.product");

            let total = 0;

            user.cart.forEach(item => {

                total +=
                    item.product.price.cost *
                    item.quantity;

            });

            res.json({

                items: user.cart,

                total

            });

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    };