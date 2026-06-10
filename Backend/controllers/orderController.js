// const User =
// require("../models/userSchema");

// const Order =
// require("../models/orderSchema");

// exports.createOrder =
// async (req, res) => {

//   try {

//     const user =
//       await User.findById(
//         req.userID
//       ).populate(
//         "cart.product"
//       );

//     let total = 0;

//     const items =
//       user.cart.map(item => {

//         total +=
//           item.product.price.cost *
//           item.quantity;

//         return {

//           product:
//             item.product._id,

//           quantity:
//             item.quantity,

//           price:
//             item.product.price.cost

//         };

//       });

//     const order =
//       await Order.create({

//         user:
//           req.userID,

//         products:
//           items,

//         totalAmount:
//           total,

//         shippingAddress:
//           req.body.shippingAddress,

//         paymentMethod:
//           req.body.paymentMethod

//       });

//     user.cart = [];

//     await user.save();

//     res.status(201).json(order);

//   } catch (error) {

//     res.status(500).json(error);

//   }

// };