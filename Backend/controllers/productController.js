const Product =
    require("../models/productsSchema");
exports.createProduct = async (req, res) => {

    try {

        const product =
            await Product.create({

                ...req.body,

                createdBy: req.user._id

            });

        res.status(201).json(product);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};
exports.fetchCategory = async (req, res) => {

    // return all unique categories from products collection
    try {
        const categories = await Product.distinct("category");
        console.log(categories);
        res.status(200).json({ categories });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);

        const query = {};

        // Category filter
        if (req.query.category) {
            query.category = req.query.category;
        }

        // Multiple brands filter
        if (req.query.brands) {
            query.brand = {
                $in: req.query.brands.split(","),
            };
        }

        // If page or limit is not provided, return all products
        if (!page || !limit) {
            const products = await Product.find(query);

            return res.status(200).json(products);
        }

        const skip = (page - 1) * limit;

        const totalProducts = await Product.countDocuments(query);

        const products = await Product.find(query)
            .skip(skip)
            .limit(limit);

        res.status(200).json({
            products,
            currentPage: page,
            totalPages: Math.ceil(totalProducts / limit),
            totalProducts,
        });

    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

exports.getBrandsByCategory = async (req, res) => {

    try {

        const category = req.query.category;

        const brands =
            await Product.distinct(
                "brand",
                {
                    category,
                }
            );

        res.status(200).json({
            brands,
        });

    } catch (error) {

        res.status(500).json({
            error: error.message,
        });

    }
};

exports.getProduct =
    async (req, res) => {

        try {

            const product =
                await Product.findById(
                    req.params.id
                );

            if (!product) {

                return res.status(404)
                    .json({
                        message: "Product not found"
                    });
            }

            res.json(product);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    };

exports.searchProducts =
    async (req, res) => {

        try {

            const keyword =
                req.query.q;

            if (!keyword || keyword.trim() === "") {
                const products =
                    await Product.find({});
                return res.json(products);
            }
            const products =
                await Product.find({
                    $or: [
                        { name: { $regex: keyword, $options: 'i' } },
                        { description: { $regex: keyword, $options: 'i' } },
                        { category: { $regex: keyword, $options: 'i' } },
                        { brand: { $regex: keyword, $options: 'i' } }
                    ]
                });

            res.json(products);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    };

exports.updateProduct =
    async (req, res) => {

        try {

            const product =
                await Product.findByIdAndUpdate(

                    req.params.id,

                    req.body,

                    {
                        new: true
                    }

                );

            if (!product) {

                return res.status(404)
                    .json({
                        message: "Product not found"
                    });
            }

            res.json(product);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    };

exports.deleteProduct =
    async (req, res) => {

        try {

            const product =
                await Product.findByIdAndDelete(
                    req.params.id
                );

            if (!product) {

                return res.status(404)
                    .json({
                        message: "Product not found"
                    });
            }

            res.json({
                message: "Product deleted"
            });

        } catch (error) {

            res.status(500).json({
                error: error.message
            });
        }
    };