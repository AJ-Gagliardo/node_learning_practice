const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => res.send("hello, world!"));

const PORT = process.env.PORT;
// const PORT = 3000;

app.listen(PORT, () =>
  console.log(`my first express app - listening on port ${PORT}`)
);
