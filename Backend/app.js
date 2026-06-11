require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const port = process.env.PORT || 5000;

require("./db/conn");

const DefaultData =
require("./defaultdata");

app.use(express.json());

app.use(express.urlencoded({
    extended:true
}));

app.use(cookieParser());

const registerRoutes =
require("./routes");

registerRoutes(app);

app.listen(port, async ()=>{

    console.log(
        `Server running on port ${port}`
    );

    await DefaultData();

});