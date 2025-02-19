const http = require("http");
const server = http.createServer(async (req, res) => {
  const response = await fetch("https://dummyjson.com/products");

  const data = await response.json();

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  const titles = data["products"].map((product) => product["title"]);
  res.end(JSON.stringify(titles));
});

server.listen(9010, (err) => {
  if (err) console.log("error : " + err);
  else console.log("Server is running at http://localhost:9010/");
});
