const express = require("express");
const router = new express.Router();
const products = require("../models/productsSchema");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const { getProducts} = require("../controllers/productController");
const { getProductsOne } = require("../controllers/productController");


const { registerUser }= require("../controllers/userController");
const {loginUser}= require("../controllers/userController");
const {addCart} = require("../controllers/userController");
const {cartdetails} = require("../controllers/userController");
const {isValidUser} = require("../controllers/userController");
const {removeCart} = require("../controllers/userController");
const {logoutUser} = require("../controllers/userController");

const authenicate = require("../middleware/isAuth");

//products related routes
router.get("/getproducts", getProducts);
router.get("/getproductsone/:id", getProductsOne);

//user related routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/addcart/:id", authenicate,addCart);
router.get("/cartdetails", authenicate,cartdetails);
router.get("/validuser", authenicate,isValidUser);
router.get("/remove/:id", authenicate,removeCart);
router.get("/logout", authenicate,logoutUser);


module.exports = router;


// const adminAuth =
// require("../middleware/adminAuth");

// const { createProduct, updateProduct, deleteProduct, searchProducts, filterProducts} =require("../controllers/productController");

// const { createReview} =require("../controllers/reviewController");

// const { createOrder} =require("../controllers/orderController");

// const { addWishlist} =require("../controllers/userController");

// router.post(
//  "/products",
//  authenicate,
//  adminAuth,
//  createProduct
// );

// router.put(
//  "/products/:id",
//  authenicate,
//  adminAuth,
//  updateProduct
// );

// router.delete(
//  "/products/:id",
//  authenicate,
//  adminAuth,
//  deleteProduct
// );

// router.get(
//  "/products/search",
//  searchProducts
// );

// router.get( "/products/filter", filterProducts);

// router.post(
// "/wishlist/:id",
// authenicate,
// addWishlist);

// router.post("/products/:id/review",authenicate,createReview);

// router.post( "/orders", authenicate,createOrder);