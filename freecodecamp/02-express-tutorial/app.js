const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([{ name: "john" }, { name: "susan" }]);
});

app.listen(5000, () => {
  console.log(`server is listenging on port 5000`);
});
