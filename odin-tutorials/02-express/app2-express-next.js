// concepts:  app.all , next()
const express = require("express");
const app = express();
const PORT = 3000;

// hello word reply on get

// GET method route

app.get("/", (req, res) => {
  res.send("hello world");
});

// POST method route
app.get("/", (req, res) => {
  res.send("POST request to the homepage");
});

app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section...");
  next(); // pass control tot he nex handler
});

app.listen(PORT, () => {
  console.log(`My first Express App - listening on port`);
});

app.get("/about", (req, res) => {
  res.send("about");
});
app.get("/ab?cd", (req, res) => {
  res.send("ab?cd");
});
