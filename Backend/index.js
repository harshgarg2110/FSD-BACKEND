import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import User from "./models/user.js";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.post("/user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(210).json({ user: user });
  } catch (error) {
    res.status(500).json({ message: "Error User Creation" });
  }
});

const port = process.env.PORT;

// app.get("/", async (req, res) => {
//   res.send("Welcome");
// });

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
