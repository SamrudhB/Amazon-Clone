const express = require("express");

const router = express.Router();

const auth =
require("../middleware/auth");

const {

createOrder,
getMyOrders,
cancelOrder

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

router.patch(
    "/cancel/:id",
    auth,
    cancelOrder
);

module.exports = router;