const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// this is how it looks before  taking the (req,res)=>...
//part to teh controllers forlder
// router.route("/").get((req, res) => {
//   res.send("all items");
// });
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
