import express from "express";
import bodyParser from "body-parser";
import monsters from "./routes/monster.route.js";
import { connectDB } from "./database/database.js";

const app = express();
// const port = 3000; // Use port 3000 for the frontend server
const port = 8000; // Use port 8000 for the backend server

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json()); // Parse incoming request bodies in json format

// Routers
app.use("/monsters", monsters);

// Start the server
app.listen(port, function () {
    console.log(`🚀 Fire app listening on port ${port}!`);
});
