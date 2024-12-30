const mongoose = require("mongoose");

//structure for the task that will enter in mongodb
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

modeule.exports = mongoose.model("Task", TaskSchema);
