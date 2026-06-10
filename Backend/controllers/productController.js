const products = require("../models/productsSchema");

exports.getProducts = async (req, res) => {
    try {
        const producstdata = await products.find();
        console.log(producstdata + "data here");
        res.status(201).json(producstdata);
    } catch (error) {
        console.log("error" + error.message);
    }
}

exports.getProductsOne = async (req, res) => {

    try {
        const { id } = req.params;
        console.log(id);

        const individual = await products.findOne({ id: id });
        console.log(individual + "individual data here");

        res.status(201).json(individual);
    } catch (error) {
        res.status(400).json(error);
    }
}


// exports.createProduct = async (req, res) => {
//   try {

//     const product = await products.create(req.body);

//     res.status(201).json(product);

//   } catch (error) {

//     res.status(500).json(error);

//   }
// };

// exports.updateProduct = async (req, res) => {

//   try {

//     const product =
//       await products.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {
//           new: true
//         }
//       );

//     res.json(product);

//   } catch (error) {

//     res.status(500).json(error);

//   }
// };

// exports.deleteProduct = async (req, res) => {

//   try {

//     await products.findByIdAndDelete(
//       req.params.id
//     );

//     res.json({
//       message: "Product deleted"
//     });

//   } catch (error) {

//     res.status(500).json(error);

//   }
// };

// exports.searchProducts = async (req, res) => {

//   try {

//     const q = req.query.q;

//     const result =
//       await products.find({
//         $text: {
//           $search: q
//         }
//       });

//     res.json(result);

//   } catch (error) {

//     res.status(500).json(error);

//   }

// };

// exports.filterProducts = async (req, res) => {

//   try {

//     let query = {};

//     if (req.query.category) {
//       query.category = req.query.category;
//     }

//     if (req.query.brand) {
//       query.brand = req.query.brand;
//     }

//     if (
//       req.query.minPrice ||
//       req.query.maxPrice
//     ) {

//       query["price.cost"] = {};

//       if (req.query.minPrice) {
//         query["price.cost"].$gte =
//           Number(req.query.minPrice);
//       }

//       if (req.query.maxPrice) {
//         query["price.cost"].$lte =
//           Number(req.query.maxPrice);
//       }
//     }

//     const result =
//       await products.find(query);

//     res.json(result);

//   } catch (error) {

//     res.status(500).json(error);

//   }

// };