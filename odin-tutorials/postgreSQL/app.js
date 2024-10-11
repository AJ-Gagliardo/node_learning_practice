const express = require("express");
const app = express();
const { getAllUsernames, insertUsername } = require("./db/queries");
const port = 3000;
require("dotenv").config();

app.get("/", async (req, res) => {
  const usernames = await getAllUsernames();
  res.json(usernames);
  // res.send(usernames);
  // console.log(usernames);
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
