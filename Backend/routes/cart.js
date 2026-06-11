const express =
require("express");

const router =
express.Router();

const auth =
require("../middleware/auth");

const {

addToCart,
getCart,
updateCart,
removeFromCart,
cartSummary

}
=
require("../controllers/cartController");

router.post(
    "/add",
    auth,
    addToCart
);

router.get(
    "/",
    auth,
    getCart
);

router.patch(
    "/update",
    auth,
    updateCart
);

router.delete(
    "/:productId",
    auth,
    removeFromCart
);

router.get(
    "/summary",
    auth,
    cartSummary
);

module.exports =
router;