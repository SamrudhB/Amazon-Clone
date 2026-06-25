// redisClient.js
const { createClient } = require("redis");

// Set up the client to connect to local port 6379 on your EC2 instance
const redisClient = createClient({
    url: "redis://127.0.0.1:6379"
});

redisClient.on("error", (err) => console.error("Redis Client Error:", err));
redisClient.on("connect", () => console.log("Connected to Redis on EC2 successfully!"));

// Establish the persistent connection immediately
(async () => {
    if (!redisClient.isOpen) {
        await redisClient.connect();
    }
})();

module.exports = redisClient;