import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  });
// const connect = async() =>{
//     try{
//         mongoose.connect(process.env.MONGO_URI);
//         console.log("mongo connected");
//     }
//     catch(err){
//         console.log("error in mongo");
//         process.exit(1);
//     }
// }
// connect();

//Design Book Schema
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  date: String,
  image: String,
});
// Design Book Model
const Book = mongoose.model("MyBook", BookSchema);

app.post("/books", async (req, res) => {
  try {
    const newbook = new Book(req.body);
    await newbook.save();
    res.status(200).send("Book Added");
  } catch (error) {
    res.status(500).send("Sever Error");
  }
});

app.listen(9000, () => {
  console.log("server is running on port 9000");
});
