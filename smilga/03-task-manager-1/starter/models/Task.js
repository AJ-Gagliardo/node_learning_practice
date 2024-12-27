const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true, //will trim away empty spaces
    maxlength: [20, "name can not be more than 20"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//simple schema
//  name: String,
// completed: Boolean,

module.exports = mongoose.model("Task", TaskSchema);
