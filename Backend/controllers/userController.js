const products = require("../models/productsSchema");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenicate = require("../middleware/isAuth");

exports.registerUser =  async (req, res) => {
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "filll the all details" });
        console.log("no details");
    };

    try {

        const preuser = await User.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "This email is already exist" });
        } else if (password !== cpassword) {
            res.status(422).json({ error: "password are not matching" });;
        } else {

            const finaluser = new User({
                fname, email, mobile, password, cpassword
            });

            const storedata = await finaluser.save();
            res.status(201).json(storedata);
        }

    } catch (error) {
        console.log("error" + error.message);
        res.status(422).send(error);
    }

}

exports.loginUser =  async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "fill the details" });
    }

    try {

        const userlogin = await User.findOne({ email: email });
        console.log(userlogin);
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            console.log(isMatch);



            if (!isMatch) {
                res.status(400).json({ error: "invalid crediential pass" });
            } else {
                
                const token = await userlogin.generatAuthtoken();
                console.log(token);

                res.cookie("eccomerce", token, {
                    expires: new Date(Date.now() + 2589000),
                    httpOnly: true
                });
                res.status(201).json(userlogin);
            }

        } else {
            res.status(400).json({ error: "user not exist" });
        }

    } catch (error) {
        res.status(400).json({ error: "invalid crediential pass" });
        console.log("error" + error.message);
    }
}

exports.addCart = async (req, res) => {

    try {
        console.log("perfect 6");
        const { id } = req.params;
        const cart = await products.findOne({ id: id });
        console.log(cart + "cart");

        const Usercontact = await User.findOne({ _id: req.userID });
        console.log(Usercontact + "user");


        if (Usercontact) {
            const cartData = await Usercontact.addcartdata(cart);

            await Usercontact.save();
            console.log(cartData + "cart data");
            console.log(Usercontact + "user save");
            res.status(201).json(Usercontact);
        }
    } catch (error) {
        console.log(error);
    }
}

exports.cartdetails = async (req, res) => {
    try {
        const buyuser = await User.findOne({ _id: req.userID });
        console.log(buyuser + "user");
        res.status(201).json(buyuser);
    } catch (error) {
        console.log(error + "error for buy now");
    }
}

exports.isValidUser = async (req, res) => {
    try {
        const validuserone = await User.findOne({ _id: req.userID });
        console.log(validuserone + "user");
        res.status(201).json(validuserone);
    } catch (error) {
        console.log(error + "error for non-valid user");
    }
}

exports.removeCart = async (req, res) => {
    try {
        const { id } = req.params;

        req.rootUser.carts = req.rootUser.carts.filter((curel) => {
            return curel.id != id
        });

        req.rootUser.save();
        res.status(201).json(req.rootUser);
        console.log("item remove");

    } catch (error) {
        console.log(error + "jwt provide then remove");
        res.status(400).json(error);
    }
}

exports.logoutUser = async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
            return curelem.token !== req.token
        });

        res.clearCookie("eccomerce", { path: "/" });
        req.rootUser.save();
        res.status(201).json(req.rootUser.tokens);
        console.log("user logout");

    } catch (error) {
        console.log(error + "jwt provide then logout");
    }
}

// exports.addWishlist =
// async (req, res) => {

//   try {

//     const user =
//       await User.findById(
//         req.userID
//       );

//     if (
//       !user.wishlist.includes(
//         req.params.id
//       )
//     ) {

//       user.wishlist.push(
//         req.params.id
//       );

//       await user.save();
//     }

//     res.json(user);

//   } catch (error) {

//     res.status(500).json(error);

//   }

// };