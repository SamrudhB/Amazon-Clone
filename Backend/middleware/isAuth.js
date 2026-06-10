const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const keysecret = process.env.KEYSECRET;

const authenicate = async(req,res,next)=>{
    try {
        const token = req.cookies.eccomerce;
        
        const verifyToken = jwt.verify(token,keysecret);
     
        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});
       

        if(!rootUser){ throw new Error("User Not Found") };

        req.token = token; 
        req.rootUser = rootUser;   
        req.userID = rootUser._id;   
    
        next();  


    } catch (error) {
        res.status(401).send("Unauthorized:No token provided");
        console.log(error);
    }
};

module.exports = authenicate;

// module.exports = (req, res, next) => {

//   if (req.user.role !== "admin") {
//     return res.status(403).json({
//       message: "Admin access required"
//     });
//   }

//   next();
// };