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