const express =
    require("express");

const router =
    express.Router();

const auth =
    require("../middleware/auth");

const adminAuth =
    require("../middleware/adminAuth");

const {

    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
    fetchCategory,
    getBrandsByCategory

}
    =
    require("../controllers/productController");

//public

router.get(
    "/",
    getProducts
);

router.get(
    "/search",
    searchProducts
);

router.get(
    "/categories",
    fetchCategory,
);

router.get("/brands", getBrandsByCategory);

router.get(
    "/:id",
    getProduct
);

//admin
router.post(
    "/",
    auth,
    adminAuth,
    createProduct
);

router.put(
    "/:id",
    auth,
    adminAuth,
    updateProduct
);

router.delete(
    "/:id",
    auth,
    adminAuth,
    deleteProduct
);



module.exports = router;