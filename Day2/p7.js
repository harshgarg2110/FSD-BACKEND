const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/home") {
    res.end("Welcome to Home Page");
  } else if (req.url === "/about") {
    res.end("Welcome to About Page");
  } else if (req.url === "/contact") {
    res.end("Welcome to Contact Page");
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});

server.listen(9020, (err) => {
  if (err) throw err;
  else console.log("Server is running at http://localhost:9020/");
});
