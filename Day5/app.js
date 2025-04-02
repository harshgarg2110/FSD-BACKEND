const express = require("express");
const fs = require("fs/promises");

const app = express();
let users = [];
app.use(express.json());

const readdata = async () => {
  users = JSON.parse(await fs.readFile("./data.json", "utf8"));
};

const writedata = async () => {
  await fs.writeFile("./data.json", JSON.stringify(users));
};

readdata();

app.get("/getdata", async (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  //   const { name, age } = req.body;
  //   const newid = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  //   const newuser = { id: newid, name, age };
  //   users.push(newuser);
  //   writedata();
  //   res.status(200).json({ message: "user register success", data: newuser });
});

app.put("/users/:id/", (req, res) => {
  const { uid } = req.params;
});

app.listen(9000, () => {
  console.log("server is running on port 9000");
});
