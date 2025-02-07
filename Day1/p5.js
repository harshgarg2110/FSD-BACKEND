const fs = require("fs");
const data = " I AM A NEW DATA";
fs.writeFile("./data.txt", data, (err) => {
  if (err) console.error("Error writing file", err);
  else console.log("File written successfully");
});
