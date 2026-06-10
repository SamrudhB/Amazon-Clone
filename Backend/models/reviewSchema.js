// const mongoose = require("mongoose");

// const reviewSchema =
// new mongoose.Schema({

//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "USER"
//   },

//   product: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "products"
//   },

//   rating: {
//     type: Number,
//     min: 1,
//     max: 5
//   },

//   review: String

// }, {
//   timestamps: true
// });

// reviewSchema.index(
//   {
//     user: 1,
//     product: 1
//   },
//   {
//     unique: true
//   }
// );

// module.exports =mongoose.model("Review",reviewSchema);