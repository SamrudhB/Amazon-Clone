const paymentSchema = new mongoose.Schema({

    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    },

    amount:Number,

    paymentId:String,

    status:String

},{
    timestamps:true
});