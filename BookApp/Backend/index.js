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

app.get("/books", async (req, res) => {
  try {
    const Books = await Book.find();
    res.json(Books);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

app.get("/search", async (req, res) => {
  const { title } = req.query;
  try {
    const books = await Book.find({ title: { $regex: title, $options: "i" } }); // case-insensitive search
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).send("Book not found");
    res.send("Book deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.put("/books/:id", async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body);
  if (!book) return res.status(404).send("Book Not Found");
  res.json(book);
});

app.listen(9000, () => {
  console.log("server is running on port 9000");
});
