const express = require("express");

const router = express.Router();

const auth =
require("../middleware/auth");

const {

addReview,
getReviews

}
=
require("../controllers/reviewController");

router.post(
    "/",
    auth,
    addReview
);

router.get(
    "/:productId",
    getReviews
);

module.exports = router;