const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/database");

mongoose.connect(config.database);
mongoose.connection.on("connected", () => {
  console.log("Connected to database" + config.database);
});
mongoose.connection.on("error", (err) => {
  console.log("Database Error" + err);
});

//Intialising App
const app = express();

//Port Number
const port = 3000;

//Imporing Routes
const users = require("./routes/users");
const blogs = require("./routes/blog");

//Cors Initialization
app.use(cors());

//Static folder
app.use(express.static(path.join(__dirname, "public")));

//BodyParser Initialization
app.use(bodyParser.json());

app.use("/users", users);
app.use("/blog", blogs);

app.listen(port, () => {
  console.log("Server started at port" + port);
});
