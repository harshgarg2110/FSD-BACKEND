import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    handleview();
  }, []);

  const handleview = async () => {
    try {
      const res = await axios.get("http://localhost:9000/books");
      setBooks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
        View Book Details
      </h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-2xl shadow-md p-4 w-64 hover:shadow-lg transition duration-300"
          >
            <img
              src={book.image}
              alt={book.title}
              className="rounded-xl w-full h-60 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {book.title}
            </h3>
            <h2 className="text-md text-gray-600 mb-1">{book.author}</h2>
            <h2 className="text-sm text-gray-500">{book.date}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBook;
