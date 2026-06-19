module.exports = (app) => {

    app.use("/api/users", require("./user"));

    app.use("/api/products", require("./product"));

    app.use("/api/cart", require("./cart"));

    app.use("/api/wishlist", require("./wishlist"));

    app.use("/api/orders", require("./order"));

    app.use("/api/payment", require("./payment"));

    app.use("/api/reviews", require("./review"));
};