const express = require("express");
const app = express();
const { getAllUsernames, insertUsername } = require("./db/queries");
const port = 3000;
require("dotenv").config();

app.get("/", async (req, res) => {
  const usernames = await getAllUsernames();
  console.log("usernames will be logged here - wip");
  res.json(usernames);
  // res.send(usernames);
  // console.log(usernames);
});

app.get("/new", (req, res) => {});

app.post("/new", (req, res) => {
  console.log("username to be saved: ", req.body.username);
  res.redirect("/"); // to redirect to webpage (kind of refresh)
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
