// require("dotenv").config();

// const express = require("express");
// const cookieParser = require("cookie-parser");

// const app = express();

// const port = process.env.PORT || 5000;

// require("./db/conn");

// const DefaultData = require("./defaultdata");

// app.use(express.json());

// app.use(
//     express.urlencoded({
//         extended: true,
//     })
// );

// app.use(cookieParser());

// const registerRoutes = require("./routes");
// registerRoutes(app);

// DefaultData();

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const redisClient = require("./config/redisClient"); // Path to your redisClient file from Step 2

const app = express();
const port = process.env.PORT || 5000;

require("./db/conn");

const DefaultData = require("./defaultdata");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cookieParser());

const registerRoutes = require("./routes");
registerRoutes(app);

// Initialize static default data
DefaultData();

// Start the server and verify Redis status
app.listen(port, async () => {
    console.log(`Server running on port ${port}`);

    try {
        // Double-check connection availability on startup
        if (!redisClient.isOpen) {
            await redisClient.connect();
        }
        console.log("Redis cache engine initialization complete.");
    } catch (err) {
        console.error("Failed to connect to Redis on server startup:", err.message);
    }
});