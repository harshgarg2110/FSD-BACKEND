const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "Text/plain" });
  res.end("hello World");
});

server.listen(9000, () => {
  console.log("Server s running ");
});
