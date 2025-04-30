import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdateBook = () => {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: "",
    image: "",
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("https://book-app-31ms.onrender.com/books");
      setBooks(res.data);
    } catch (error) {
      console.error(error);
      alert("Error fetching books");
    }
  };

  const handleSelect = (id) => {
    const selected = books.find((book) => book._id === id);
    if (selected) {
      setSelectedBookId(id);
      setFormData({
        title: selected.title,
        author: selected.author,
        date: selected.date,
        image: selected.image,
      });
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://book-app-1-l6lc.onrender.com/books/${selectedBookId}`,
        formData
      );
      alert("Book updated successfully");
      fetchBooks();
    } catch (error) {
      console.error(error);
      alert("Error updating book");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Book</h2>
      <h4 className="text-lg font-medium mb-2">Select a book to update:</h4>
      <ul className="space-y-2 mb-6">
        {books.map((book) => (
          <li
            key={book._id}
            className="flex justify-between items-center bg-white shadow p-4 rounded hover:bg-gray-50 transition"
          >
            <span>
              <strong>{book.title}</strong> by {book.author}
            </span>
            <button
              onClick={() => handleSelect(book._id)}
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>

      {selectedBookId && (
        <form
          onSubmit={handleUpdate}
          className="bg-white shadow-md p-6 rounded space-y-4"
        >
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Publish Date"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Update Book
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateBook;
