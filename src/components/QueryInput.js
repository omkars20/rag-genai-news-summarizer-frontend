import React, { useState } from 'react';

const QueryInput = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        className="w-full p-3 border border-indigo-500 rounded focus:outline-none focus:ring focus:ring-indigo-500 bg-gray-800 text-white"
        placeholder="Enter your query..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white mt-4 p-3 rounded hover:bg-indigo-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default QueryInput;




