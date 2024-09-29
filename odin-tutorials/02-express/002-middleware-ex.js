function myMiddleware(req, res, next) {
  //perform some operations
  console.log("middleware function is called");

  //modify the request object
  req.customProperty = "Hello from myMiddleware";

  //call the next middleware/route handler
  next();
}

application.use(myMiddleware);
