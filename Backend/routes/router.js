const express = require("express");
const router = new express.Router();
const products = require("../models/productsSchema");
const User = require("../models/userSchema");
const { getProducts} = require("../controllers/productController");
const { getProductsOne } = require("../controllers/productController");

router.get("/getproducts", getProducts);
router.get("/getproductsone/:id", getProductsOne);

module.exports = router;