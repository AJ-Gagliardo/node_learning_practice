const express = require("express");
const app = express();
const { products } = require("./data");
const { people } = require("./data");

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log(`server is listenging on port 5000`);
});
