const http = require("http");

const server = http.createServer((req, res) => {
  // console.log("user hit the server");
  // console.log(req.method);

  console.log(req.url);

  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home page</h1>");
    res.end();
  }
  //about page
  else if (url === "/about") {
  }

  // 404
});

server.listen(5000);
