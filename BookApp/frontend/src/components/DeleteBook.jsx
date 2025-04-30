import React, { useEffect, useState } from "react";
import axios from "axios";

const DeleteBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:9000/books");
      setBooks(res.data);
    } catch (error) {
      console.error(error);
      alert("Error fetching books");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:9000/books/${id}`);
      alert("Book deleted successfully");
      fetchBooks();
    } catch (error) {
      console.error(error);
      alert("Error deleting book");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Delete Books</h2>
      {books.length === 0 ? (
        <p className="text-center text-gray-500">No books available</p>
      ) : (
        <ul className="space-y-4">
          {books.map((book) => (
            <li
              key={book._id}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow hover:bg-gray-50 transition"
            >
              <div>
                <p className="text-lg font-medium">{book.title}</p>
                <p className="text-sm text-gray-600">by {book.author}</p>
              </div>
              <button
                onClick={() => handleDelete(book._id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeleteBook;
