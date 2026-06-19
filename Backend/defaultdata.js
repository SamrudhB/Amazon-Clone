const productdata =
    require("./constant/productsdata");

const Product = require("./models/productsSchema");

const DefaultData = async () => {
    console.log("seed started")
    try {

        const count =
            await Product.countDocuments();

        if (count === 0) {
            console.log({ productdata })
            await Product.insertMany(
                productdata
            );

            console.log(
                "Products Seeded"
            );
        }

    } catch (error) {
        console.log("error in seed")
        console.log(error);

    }
};

module.exports =
    DefaultData;