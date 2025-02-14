const http = require("http");
const fs = require("fs/promises");
const Users = [
  { id: 1, name: "john", age: 25 },
  { id: 2, name: "paro", age: 24 },
  { id: 3, name: "Dora", age: 26 },
  { id: 4, name: "mona", age: 28 },
];

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { "Conten-Type": "application/json" });

  const names = Users.map((user) => user.name);
  res.end(JSON.stringify(names));
});

server.listen(9001, (err) => {
  console.log("Server is running at http://localhost:9001");
});
