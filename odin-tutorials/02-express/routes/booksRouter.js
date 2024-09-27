const { Router } = require("express");

const booksRoute = Router();

booksRoute.get("/", (req, res) => {
  res.send("All books");
});
booksRoute.get("/:bookID", (req, res) => {
  const { bookID } = req.params;
  res.send(`You have selected book: ${bookID}`);
});

module.exports = booksRoute;
