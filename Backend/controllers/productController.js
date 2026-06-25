// const Product =
//     require("../models/productsSchema");
// exports.createProduct = async (req, res) => {

//     try {

//         const product =
//             await Product.create({

//                 ...req.body,

//                 createdBy: req.user._id

//             });

//         res.status(201).json(product);

//     } catch (error) {

//         res.status(500).json({
//             error: error.message
//         });
//     }
// };
// exports.fetchCategory = async (req, res) => {

//     // return all unique categories from products collection
//     try {
//         const categories = await Product.distinct("category");
//         console.log(categories);
//         res.status(200).json({ categories });
//     } catch (error) {
//         res.status(500).json({
//             error: error.message
//         });
//     }
// };

// exports.getProducts = async (req, res) => {
//     try {
//         const page = Number(req.query.page);
//         const limit = Number(req.query.limit);

//         const query = {};

//         // Category filter
//         if (req.query.category) {
//             query.category = req.query.category;
//         }

//         // Multiple brands filter
//         if (req.query.brands) {
//             query.brand = {
//                 $in: req.query.brands.split(","),
//             };
//         }

//         // If page or limit is not provided, return all products
//         if (!page || !limit) {
//             const products = await Product.find(query);

//             return res.status(200).json(products);
//         }

//         const skip = (page - 1) * limit;

//         const totalProducts = await Product.countDocuments(query);

//         const products = await Product.find(query)
//             .skip(skip)
//             .limit(limit);

//         res.status(200).json({
//             products,
//             currentPage: page,
//             totalPages: Math.ceil(totalProducts / limit),
//             totalProducts,
//         });

//     } catch (error) {
//         res.status(500).json({
//             error: error.message,
//         });
//     }
// };

// exports.getBrandsByCategory = async (req, res) => {

//     try {

//         const category = req.query.category;

//         const brands =
//             await Product.distinct(
//                 "brand",
//                 {
//                     category,
//                 }
//             );

//         res.status(200).json({
//             brands,
//         });

//     } catch (error) {

//         res.status(500).json({
//             error: error.message,
//         });

//     }
// };

// exports.getProduct =
//     async (req, res) => {

//         try {

//             const product =
//                 await Product.findById(
//                     req.params.id
//                 );

//             if (!product) {

//                 return res.status(404)
//                     .json({
//                         message: "Product not found"
//                     });
//             }

//             res.json(product);

//         } catch (error) {

//             res.status(500).json({
//                 error: error.message
//             });
//         }
//     };

// exports.searchProducts =
//     async (req, res) => {

//         try {

//             const keyword =
//                 req.query.q;

//             if (!keyword || keyword.trim() === "") {
//                 const products =
//                     await Product.find({});
//                 return res.json(products);
//             }
//             const products =
//                 await Product.find({
//                     $or: [
//                         { name: { $regex: keyword, $options: 'i' } },
//                         { description: { $regex: keyword, $options: 'i' } },
//                         { category: { $regex: keyword, $options: 'i' } },
//                         { brand: { $regex: keyword, $options: 'i' } }
//                     ]
//                 });

//             res.json(products);

//         } catch (error) {

//             res.status(500).json({
//                 error: error.message
//             });
//         }
//     };

// exports.updateProduct =
//     async (req, res) => {

//         try {

//             const product =
//                 await Product.findByIdAndUpdate(

//                     req.params.id,

//                     req.body,

//                     {
//                         new: true
//                     }

//                 );

//             if (!product) {

//                 return res.status(404)
//                     .json({
//                         message: "Product not found"
//                     });
//             }

//             res.json(product);

//         } catch (error) {

//             res.status(500).json({
//                 error: error.message
//             });
//         }
//     };

// exports.deleteProduct =
//     async (req, res) => {

//         try {

//             const product =
//                 await Product.findByIdAndDelete(
//                     req.params.id
//                 );

//             if (!product) {

//                 return res.status(404)
//                     .json({
//                         message: "Product not found"
//                     });
//             }

//             res.json({
//                 message: "Product deleted"
//             });

//         } catch (error) {

//             res.status(500).json({
//                 error: error.message
//             });
//         }
//     };

//new

const Product = require("../models/productsSchema");
const redisClient = require("../config/redisClient"); // Adjust path to matching file location

// Global Standard Expiration time helper (1 hour = 3600 seconds)
const CACHE_TTL = 3600;

/**
 * Utility: Clear bulk collections cache keys when products change
 */
const clearProductCacheCollections = async () => {
    try {
        // Clear global arrays, categories, and brands matching patterns
        await redisClient.del("products:categories");

        const partialWildcardKeys = [
            ...(await redisClient.keys("products:all:*")),
            ...(await redisClient.keys("products:brands:*")),
            ...(await redisClient.keys("products:search:*"))
        ];

        if (partialWildcardKeys.length > 0) {
            await redisClient.del(partialWildcardKeys);
        }
    } catch (err) {
        console.error("Cache Invalidation Error:", err.message);
    }
};

// 1. CREATE PRODUCT
exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create({
            ...req.body,
            createdBy: req.user._id
        });

        // Wipe collection caches so newly added products show up immediately
        await clearProductCacheCollections();

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 2. FETCH ALL UNIQUE CATEGORIES
exports.fetchCategory = async (req, res) => {
    const cacheKey = "products:categories";
    try {
        // Check Redis
        const cachedCategories = await redisClient.get(cacheKey);
        if (cachedCategories) {
            return res.status(200).json(JSON.parse(cachedCategories));
        }

        // Cache Miss
        const categories = await Product.distinct("category");
        const responseData = { categories };

        // Save to Redis
        await redisClient.setEx(cacheKey, CACHE_TTL, JSON.stringify(responseData));

        res.status(200).json(responseData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 3. GET PRODUCTS (WITH PAGINATION AND FILTER QUERY MATRIX)
exports.getProducts = async (req, res) => {
    try {
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);
        const category = req.query.category || "";
        const brands = req.query.brands || "";

        // Create a unique cache key based on query parameters
        const cacheKey = `products:all:p${page}:l${limit}:c${category}:b${brands}`;

        // Check Redis
        const cachedProducts = await redisClient.get(cacheKey);
        if (cachedProducts) {
            return res.status(200).json(JSON.parse(cachedProducts));
        }

        const query = {};
        if (req.query.category) query.category = req.query.category;
        if (req.query.brands) {
            query.brand = { $in: req.query.brands.split(",") };
        }

        // Handle unpaginated requests
        if (!page || !limit) {
            const products = await Product.find(query);
            await redisClient.setEx(cacheKey, CACHE_TTL, JSON.stringify(products));
            return res.status(200).json(products);
        }

        // Handle paginated requests
        const skip = (page - 1) * limit;
        const totalProducts = await Product.countDocuments(query);
        const products = await Product.find(query).skip(skip).limit(limit);

        const responseData = {
            products,
            currentPage: page,
            totalPages: Math.ceil(totalProducts / limit),
            totalProducts,
        };

        // Cache the combined response layout object
        await redisClient.setEx(cacheKey, CACHE_TTL, JSON.stringify(responseData));

        res.status(200).json(responseData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 4. GET BRANDS BY CATEGORY
exports.getBrandsByCategory = async (req, res) => {
    try {
        const category = req.query.category || "all";
        const cacheKey = `products:brands:${category}`;

        const cachedBrands = await redisClient.get(cacheKey);
        if (cachedBrands) {
            return res.status(200).json(JSON.parse(cachedBrands));
        }

        const brands = await Product.distinct("brand", { category: req.query.category });
        const responseData = { brands };

        await redisClient.setEx(cacheKey, CACHE_TTL, JSON.stringify(responseData));

        res.status(200).json(responseData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 5. GET SINGLE PRODUCT BY ID
exports.getProduct = async (req, res) => {
    const { id } = req.params;
    const cacheKey = `products:item:${id}`;

    try {
        const cachedProduct = await redisClient.get(cacheKey);
        if (cachedProduct) {
            return res.status(200).json(JSON.parse(cachedProduct));
        }

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        await redisClient.setEx(cacheKey, CACHE_TTL, JSON.stringify(product));
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 6. SEARCH PRODUCTS
exports.searchProducts = async (req, res) => {
    try {
        const keyword = req.query.q || "";
        const cacheKey = `products:search:${keyword.trim().toLowerCase()}`;

        const cachedResults = await redisClient.get(cacheKey);
        if (cachedResults) {
            return res.status(200).json(JSON.parse(cachedResults));
        }

        if (!keyword || keyword.trim() === "") {
            const products = await Product.find({});
            await redisClient.setEx(cacheKey, CACHE_TTL, JSON.stringify(products));
            return res.json(products);
        }

        const products = await Product.find({
            $or: [
                { name: { $regex: keyword, $options: 'i' } },
                { description: { $regex: keyword, $options: 'i' } },
                { category: { $regex: keyword, $options: 'i' } },
                { brand: { $regex: keyword, $options: 'i' } }
            ]
        });

        await redisClient.setEx(cacheKey, CACHE_TTL, JSON.stringify(products));
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 7. UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Cache Invalidation: Remove specific item and clear old lists
        await redisClient.del(`products:item:${id}`);
        await clearProductCacheCollections();

        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 8. DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Cache Invalidation: Remove deleted item cache and reset dynamic list grids
        await redisClient.del(`products:item:${id}`);
        await clearProductCacheCollections();

        res.json({ message: "Product deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};