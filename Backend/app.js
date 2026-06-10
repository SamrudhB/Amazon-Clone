require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port=5000;
const cookieParser = require("cookie-parser");
const DefaultData = require("./defaultdata");
require("./db/conn");
const router = require("./routes/router");
const products = require("./models/productsSchema");
app.use(express.json());
app.use(cookieParser());
app.use(router);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
DefaultData();