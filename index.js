import express from "express";
import bodyParser from "body-parser";
import monsters from "./routes/monster.route.js";
import { connectDB } from "./database/database.js";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

// Create the express app
const app = express();

// Use the port defined in the environment variable
const port = process.env.PORT;

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json()); // Parse incoming request bodies in json format

// Welcome message
app.get("/", (request, response) => {
    response.send("Welcome to the monsters CRUD API!");
});

// Use the monster router for monster requests
app.use("/monsters", monsters);

// Error handling for all other invalid routes
app.use((request, response, next) => {
    response.status(404).send("Page not found.");
});

// Start the server
app.listen(port, function () {
    console.log(`🚀 Fire app listening on port ${port}!`);
});
