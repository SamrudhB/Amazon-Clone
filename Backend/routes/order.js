const express = require("express");

const router = express.Router();

const auth =
    require("../middleware/auth");

const adminAuth =
    require("../middleware/adminAuth");

const {

    createOrder,
    getMyOrders,
    cancelOrder,
    getAllOrders
}
    =
    require("../controllers/orderController");

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

router.get(
    "/admin",
    auth,
    adminAuth,
    getAllOrders
);

router.patch(
    "/cancel/:id",
    auth,
    cancelOrder
);

module.exports = router;