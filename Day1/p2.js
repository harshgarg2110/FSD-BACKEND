const fs = require("fs");

const data = "I am the data to write aditional";

fs.writeFileSync("data.txt", data);

da = " I am the second data to write aditional";
fs.appendFileSync("data.txt", da);
