const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => res.send("hello, world!"));

app.get("/user/:id", function (req, res) {
  res.send("user " + req.params.id);
});
app.post("/messages", (req, res) =>
  res.send("This is where you can see any messages.")
);

app.get("/:username/messages", (req, res) => {
  console.log("Params: ", req.params);
  console.log("Query", req.query);
  res.end();
});

app.get("/:username/messages/:messageId", (req, res) => {
  console.log(req.params);

  res.end();
});

const PORT = process.env.PORT;
// const PORT = 3000;

app.listen(PORT, () =>
  console.log(`my first express app - listening on port ${PORT}`)
);
