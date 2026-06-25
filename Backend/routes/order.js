const express = require("express");

const router = express.Router();

const auth =
    require("../middleware/auth");

const adminAuth =
    require("../middleware/adminAuth");

const {

    createOrder,
    getMyOrders,
    getOrderById,
    cancelOrder,
    getAllOrders,
    updateOrderStatus,

} = require("../controllers/orderController");

router.post(
    "/",
    auth,
    createOrder
);

router.get(
    "/",
    auth,
    getMyOrders
);

// Single order details
router.get(
    "/:id",
    auth,
    getOrderById
);

// Admin: all orders
router.get(
    "/admin",
    auth,
    adminAuth,
    getAllOrders
);

// Customer cancel
router.patch(
    "/cancel/:id",
    auth,
    cancelOrder
);

// Admin status update
router.patch(
    "/status/:id",
    auth,
    adminAuth,
    updateOrderStatus
);

module.exports = router;

