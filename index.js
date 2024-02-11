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


// Most Important elements in json:
// Name, email, phone number


// order:
// Router: path/link, defines which Controller to use
// Controller: the Route calls a function in the Controller, which calls a method in the Repository
// Repository: communicates directly with the Database, runs queries and returns results
// Database: the actual database, where the data is stored
// Model: representation of the database table in code, defines the schema/data structure


// The client sends a request to a URL.
// The route receives the request and sends it to a controller.
// The controller calls a method in the service, passing along any necessary data from the request.
// The service calls a method in the repository to retrieve or modify data in the database.
// The repository interacts with the database and returns the result to the service.
// The service processes the data and returns the result to the controller.
// The controller sends the result back to the client as a response.
// This structure helps to keep your code organized and maintainable. Each component has a
// specific role and interacts with certain other components, which makes it easier to understand
// and modify your code. It also improves the testability of your application, as each component
// can be tested in isolation.
