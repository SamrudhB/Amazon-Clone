const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keysecret = process.env.KEYSECRET;

const userSchema = new mongoose.Schema(
    {
        fname: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            unique: true,
            required: true,
        },

        mobile: {
            type: String,
            unique: true,
            required: true,
        },

        password: {
            type: String,
            required: true,
        },

        otp: {
            type: String,
            default: null,
        },

        otpExpires: {
            type: Date,
            default: null,
        },

        role: {
            type: String,
            enum: ["customer", "admin"],
            default: "customer",
        },

        cart: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                },

                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],

        wishlist: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
        ],

        tokens: [
            {
                token: String,
            },
        ],
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
});

userSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign(
            { _id: this._id },
            keysecret,
            {
                expiresIn: "1d",
            }
        );

        this.tokens = this.tokens.concat({
            token,
        });

        await this.save();

        return token;
    } catch (error) {
        console.log(error);
    }
};

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;