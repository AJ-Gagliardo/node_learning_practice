const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");

//req => middlware => res

// app.use([logger, authorize]);

// app.use(logger); applies to api/home/about/products
// app.use("/api", logger); applies only with links that start with api

// app.use(express.static("./public"));
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("items");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
