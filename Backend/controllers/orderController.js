const Order = require("../models/ordersSchema");
const User = require("../models/userSchema");
const Product = require("../models/productsSchema");
exports.createOrder = async(req,res)=>{
try{

    const {
        products
    } = req.body;

    let totalAmount = 0;

    const orderProducts = [];

    for(let item of products){

        const product =
        await Product.findById(item.product);

        if(
    product.stock <
    item.quantity
){

    return res.status(400)
    .json({
        message:
        `${product.name} out of stock`
    });
}

        if(!product){

            return res.status(404).json({
                message:"Product not found"
            });
        }

        totalAmount +=
        product.price.cost *
        item.quantity;

        orderProducts.push({
            product:product._id,
            quantity:item.quantity,
            price:product.price.cost
        });

        product.stock -= item.quantity;
        if(product.stock <= 0){
    product.stock = 0;
    product.isOutOfStock = true;
}

        await product.save();
    }

    const order =
    await Order.create({

        user:req.user._id,

        products:orderProducts,

        totalAmount

    });

    res.status(201).json(order);

}catch(error){

    res.status(500).json({
        error:error.message
    });
}
};

exports.getMyOrders =
async(req,res)=>{

try{

    const orders =
    await Order.find({
        user:req.user._id
    })
    .populate("products.product");

    res.json(orders);

}catch(error){

    res.status(500).json({
        error:error.message
    });
}
};

exports.cancelOrder =
async(req,res)=>{

try{

    const order =
await Order.findOne({

    _id:req.params.id,

    user:req.user._id

});

    if(!order){

        return res.status(404).json({
            message:"Order not found"
        });
    }

    for(
    let item
    of order.products
){

    await Product
    .findByIdAndUpdate(

        item.product,

        {
            $inc:{
                stock:
                item.quantity
            }
        }

    );
}
    order.orderStatus =
    "Cancelled";

    await order.save();

    res.json(order);

}catch(error){

    res.status(500).json({
        error:error.message
    });
}
};