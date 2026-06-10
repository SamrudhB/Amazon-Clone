// const mongoose =
// require("mongoose");

// const orderSchema =
// new mongoose.Schema({

//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "USER"
//   },

//   products: [
//     {
//       product: {
//         type:
//           mongoose.Schema.Types.ObjectId,
//         ref: "products"
//       },

//       quantity: Number,

//       price: Number
//     }
//   ],

//   totalAmount: Number,

//   shippingAddress: Object,

//   paymentMethod: String,

//   paymentStatus: {
//     type: String,
//     default: "Pending"
//   },

//   orderStatus: {
//     type: String,
//     default: "Pending"
//   }

// }, {
//   timestamps: true
// });

// module.exports = mongoose.model("Order",orderSchema);