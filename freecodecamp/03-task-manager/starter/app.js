require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

// middleware
app.use(express.static("./public"));
app.use(express.json());

//app.get('/api/v1/tasks)        // -- get all the tasks
//app.post('/api/v1/tasks)       // -- create a new task
//app.get('/api/v1/tasks/:id')   // --get single task
//app.patch('/api/v1/tasks/:id') // --update single task
//app.delete('/api/v1tasks/:id) // -- delete single task

// get all the tasks
app.use("/api/v1/tasks", tasks);

const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
