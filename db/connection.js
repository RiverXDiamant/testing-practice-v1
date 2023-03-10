//=============================================================================
// Mongo Atlas Connection
//=============================================================================
require("dotenv").config();
const mongoose = require("mongoose");

// Mongo URL and Connection
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " Is Mongodb not running?"));
db.on("connected", () => console.log("Mongo Connected at: ", mongoURI + " ✔️"));
db.on("disconnected", () => console.log("mongo disconnected"));

// Open the Connection
db.on("open", () => {
  console.log("Mongo Connection Made! ✔️");
});

// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration and can be exported to other files
module.exports = mongoose;
