import React from "react";
import axios from "axios";

const AddBook = () => {
  const handlebook = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const date = e.target.date.value;
    const image = e.target.image.value;
    const books = { title, author, date, image };

    try {
      await axios.post("https://book-app-1-l6lc.onrender.com/books", books);
      alert("Book Added Successfully");
      e.target.reset(); // Clear form after submission
    } catch (err) {
      console.error(err);
      alert("Failed to add book");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Add Book
        </h1>
        <form onSubmit={handlebook} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Title:
            </label>
            <input
              type="text"
              name="title"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Author:
            </label>
            <input
              type="text"
              name="author"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Date:
            </label>
            <input
              type="date"
              name="date"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Image URL:
            </label>
            <input
              type="text"
              name="image"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
