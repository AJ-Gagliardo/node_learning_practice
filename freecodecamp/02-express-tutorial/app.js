const express = require("express");
const app = express();
const { products } = require("./data");
const { people } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products/:productID", (req, res) => {
  // console.log(req);
  console.log(req.params);
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  res.json(singleProduct);
});
// app.get("/api/products", (req, res) => {
//   const newProducts = products.map((product) => {
//     const { id, name, image } = product;
//     return { id, name, image };
//   });
//   res.json(newProducts);
// });
app.listen(5000, () => {
  console.log(`server is listenging on port 5000`);
});
