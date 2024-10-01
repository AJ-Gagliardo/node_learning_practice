// const getUserById = async (req, res) => {
//   const userID = req.params.id;
// };

// const user = await someDBQueryToGetUser(userId);

// if (!user) {
//   res.status(404).send("user not found");
//   return;
// }

// res.send(`User found : ${user.name}`);

const asyncHandler = require("express-async-handler");

const getUserById = asyncHandler(async (req, res) => {
  const userID = req.params.userID;
  const user = await someDBQueryToGetUser(userId);

  if (!user) {
    throw new CustomNotFoundError("user not found");
  }
  res.send(`User found: ${user.name}`);
});

const getUsers = asyncHandler(async (req, res) => {
  //code
  console.log("getting users");
});

const createUser = asyncHandler(async (req, res) => {
  //code
  console.log("creating users");
});

module.exports = { getUserById, getUsers, createUser };
