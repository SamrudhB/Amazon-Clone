const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
        trim:true
    },

    description:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    brand:{
        type:String,
        required:true
    },

    images:[
        {
            type:String
        }
    ],

    price:{
        mrp:{
            type:Number,
            required:true
        },

        cost:{
            type:Number,
            required:true
        },

        discount:{
            type:Number,
            default:0
        }
    },

    stock:{
        type:Number,
        default:0
    },
    isOutOfStock:{
    type:Boolean,
    default:false
},

    averageRating:{
        type:Number,
        default:0
    },

    totalReviews:{
        type:Number,
        default:0
    },

    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},
{
    timestamps:true
});

productSchema.index({
    name:"text",
    description:"text",
    brand:"text"
});

module.exports =
mongoose.model(
    "Product",
    productSchema
);