// user controller file - controllers/userController.js

const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await someDBQueryToGetUser(userId);

    if (!user) {
      res.status(404).send("User not found");
      return;
    }

    res.send(`User found: ${user.name}`);
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).send("Internal Server Error");

    // or we can call next(error) instead of sending a response here
    // Using `next(error)` however will only render an error page in the express' default view and respond with the whole html to the client.
    // So we will need to create a special type of middleware function if we want a different response and we will get to that in a bit.
  }
};
