const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("Getting index (yes, all of them)");
});

module.exports = indexRouter;
