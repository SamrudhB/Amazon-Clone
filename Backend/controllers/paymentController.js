const Payment =
require("../models/paymentSchema");

const Order =
require("../models/ordersSchema");

exports.createPayment =
async(req,res)=>{

try{

    const {
        orderId,
        paymentMethod
    } = req.body;

    const order =
    await Order.findById(orderId);

    if(!order){

        return res.status(404).json({
            message:"Order not found"
        });
    }

    const payment =
    await Payment.create({

        user:req.user._id,

        order:order._id,

        amount:order.totalAmount,

        paymentMethod,

        paymentStatus:"Success"

    });

    res.status(201).json(payment);

}catch(error){

    res.status(500).json({
        error:error.message
    });
}
};

exports.getPayments =
async(req,res)=>{

try{

    const payments =
    await Payment.find({
        user:req.user._id
    });

    res.json(payments);

}catch(error){

    res.status(500).json({
        error:error.message
    });
}
};