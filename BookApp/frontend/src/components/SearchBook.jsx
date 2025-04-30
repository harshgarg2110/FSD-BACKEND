import React, { useState } from "react";
import axios from "axios";

const SearchBook = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    if (!query) {
      alert("Please enter a title to search");
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:9000/search?title=${query}`
      );
      setBooks(res.data);
    } catch (error) {
      console.error(error);
      alert("Error while fetching books");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        Search Books
      </h2>

      <div className="flex justify-center items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Enter book title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleSearch}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {books.length > 0 ? (
          books.map((book) => (
            <div
              key={book._id}
              className="bg-white rounded-xl shadow-md p-4 w-72 hover:shadow-lg transition duration-300"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-56 object-cover rounded-md mb-3"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {book.title}
              </h3>
              <p className="text-gray-600">by {book.author}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No books found
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchBook;
