const express =
require("express");

const router =
express.Router();

const auth =
require("../middleware/auth");
const User = require("../models/userSchema");

const {

    register,
    login,
    profile,
    logout

}
=
require("../controllers/userController");

router.post(
    "/register",
    register
);

router.post(
    "/login",
    login
);

router.get(
    "/profile",
    auth,
    profile
);

router.post(
    "/logout",
    auth,
    logout
);

module.exports =
router;