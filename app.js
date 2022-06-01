const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const api = process.env.API_URL;
const brandRoute = require("./routes/brands/brandsRoute");

app.use(`${api}/brands`, brandRoute);

mongoose
  .connect("mongodb://localhost/Klubworks")
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.log("An error occured", err));

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log("listening on port " + port);
});
