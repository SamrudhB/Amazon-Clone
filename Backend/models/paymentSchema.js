const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    },

    amount:{
        type:Number,
        required:true
    },

    paymentMethod:{
        type:String,
        enum:[
            "COD",
            "UPI",
            "CARD"
        ]
    },

    paymentStatus:{
        type:String,
        enum:[
            "Pending",
            "Success",
            "Failed"
        ],
        default:"Pending"
    }

},{
    timestamps:true
});

module.exports =
mongoose.model("Payment",paymentSchema);