const express = require("express");
const userRouter = require("./routes/userRoutes");

const app = express();

// application-level middlewares, will always execute on every incoming requests

// parses form payloads and sets it to the `req.body`

app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  // code
  // just be sure to call 'next'
  next();
});

// base mount path is `/users` and will always execute on that specific mount path, and yes including '/users/a/b/c'

app.use("/users", userRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
