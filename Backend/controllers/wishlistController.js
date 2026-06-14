const User =
require("../models/userSchema");

const Product =
require("../models/productsSchema");
exports.addToWishlist =
async(req,res)=>{

try{

    const { productId } = req.body;

    const user =
    await User.findById(req.user._id);

    const exists =
user.wishlist.some(

    item =>
    item.toString() ===
    productId

);

    if(exists){

      return res.json({
        message:"Already added"
      });

    }

    user.wishlist.push(productId);

    await user.save();

    res.json({
      message:"Added to wishlist"
    });

}catch(error){

    res.status(500).json({
        error:error.message
    });
}
};

exports.getWishlist =
async(req,res)=>{

try{

    const user =
    await User.findById(req.user._id)
    .populate("wishlist");

    res.json(user.wishlist);

}catch(error){

    res.status(500).json({
        error:error.message
    });
}
};

exports.removeWishlist =
async(req,res)=>{

try{

    const { productId } = req.params;

    const user =
    await User.findById(req.user._id);

    user.wishlist =
    user.wishlist.filter(

      id =>
      id.toString() !== productId

    );

    await user.save();

    res.json({
      message:"Removed"
    });

}catch(error){

    res.status(500).json({
        error:error.message
    });
}
};