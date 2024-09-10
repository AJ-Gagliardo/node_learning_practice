const http = require("http");

const servert = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World");
});

servert.listen(5000, () => {
  console.log("Server listening on port: 5000...");
});
