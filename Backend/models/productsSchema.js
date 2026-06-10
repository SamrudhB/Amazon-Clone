const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id:String,
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String
});

const Products = new mongoose.model("products",productSchema);

module.exports = Products;

// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({

//   name: {
//     type: String,
//     required: true
//   },

//   description: String,

//   category: String,

//   brand: String,

//   images: [String],

//   price: {
//     mrp: Number,
//     cost: Number,
//     discount: Number
//   },

//   stock: {
//     type: Number,
//     default: 0
//   },

//   seller: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "USER"
//   },

//   averageRating: {
//     type: Number,
//     default: 0
//   },

//   totalReviews: {
//     type: Number,
//     default: 0
//   }

// }, {
//   timestamps: true
// });

// productSchema.index({
//   name: "text",
//   description: "text"
// });

// module.exports = mongoose.model("products",productSchema);