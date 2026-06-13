const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const keysecret = process.env.KEYSECRET;

const auth = async (req, res, next) => {

    try {

        const token = req.cookies.ecommerce;

        if (!token) {
            return res.status(401).json({
                message: "No token found"
            });
        }

        const decoded = jwt.verify(
            token,
            keysecret
        );

        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token
        });

        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        req.user = user;
        req.token = token;

        next();

    } catch (error) {

        console.log(error);

        return res.status(401).json({
            message: "Unauthorized"
        });
    }
};

module.exports = auth;