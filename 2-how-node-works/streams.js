const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // solution 1 ## only for small projects, not good for big projects
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  //solution 2: streams ### better but has 'back pressure' - when response can't send response as fast as it sends the file (?)
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("file not found!");
  //   });

  // Solution 3 - use the Pipe operator
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readableSource.pip(writeableDest)
});

server.listen(8000, "127.0.0.1", () => console.log("listening..."));
