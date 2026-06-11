const express = require("express");

const router = express.Router();

const auth =
require("../middleware/auth");

const {

addToWishlist,
getWishlist,
removeWishlist

}
=
require("../controllers/wishlistController");

router.post(
    "/add",
    auth,
    addToWishlist
);

router.get(
    "/",
    auth,
    getWishlist
);

router.delete(
    "/:productId",
    auth,
    removeWishlist
);
module.exports =
router;