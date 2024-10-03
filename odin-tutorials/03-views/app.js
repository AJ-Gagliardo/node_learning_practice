const path = require("node:path");
const express = require("express"); //
const app = express(); //
const port = 3000; //

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!" });
});
app.listen(port, () => {
  //
  console.log(`listening to port ${port} `);
});

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

app.get("/", (req, res) => {
  res.render("index", { links: links });
});
