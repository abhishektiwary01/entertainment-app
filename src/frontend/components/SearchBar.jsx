import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      axios.get(`https://www.omdbapi.com/?apikey=d4a9f7e&s=${query}`)
        .then(response => {
          // Filter out results without a poster and limit to 6 results
          const filteredResults = response.data.Search
            ? response.data.Search.filter(item => item.Poster !== 'N/A').slice(0, 3)
            : [];
          setResults(filteredResults);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
        });
    }
  };

  return (
    <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-12">
      <form
        className="relative w-full max-w-4xl ml-20 bg-transparent rounded-lg"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="default-search"
          className="sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none"
            placeholder="Search for movies or TV series"
            value={query}
            onChange={handleChange}
            required
          />
        </div>
      </form>

      <div className="max-w-4xl mx-20">
        {results.length > 0 && (
          <div className="flex flex-wrap justify-start">
            {results.map(result => (
              <div
                key={result.imdbID}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
              >
                <div className="bg-gray-800 rounded-lg overflow-hidden ">
                  <img
                    src={result.Poster}
                    alt={result.Title}
                    className="w-full h-auto"
                  />
                  <div className="p-3">
                    <h3 className="text-sm text-white">{result.Title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
