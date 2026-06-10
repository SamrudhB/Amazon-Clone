// const Review =
// require("../models/reviewSchema");

// const Product =
// require("../models/productsSchema");

// exports.createReview =
// async (req, res) => {

//   try {

//     const review =
//       await Review.create({

//         user: req.userID,

//         product: req.params.id,

//         rating: req.body.rating,

//         review: req.body.review

//       });

//     const reviews =
//       await Review.find({
//         product: req.params.id
//       });

//     const avg =
//       reviews.reduce(
//         (sum, item) =>
//           sum + item.rating,
//         0
//       ) / reviews.length;

//     await Product.findByIdAndUpdate(
//       req.params.id,
//       {
//         averageRating: avg,
//         totalReviews:
//           reviews.length
//       }
//     );

//     res.json(review);

//   } catch (error) {

//     res.status(500).json(error);

//   }

// };