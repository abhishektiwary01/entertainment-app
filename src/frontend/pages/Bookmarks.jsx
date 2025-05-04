import React from 'react';
import { useAppContext } from '../../contexts/AppContext.jsx';
import Navbar from '../components/Navbar';

const Bookmarks = () => {
  const { bookmarks } = useAppContext();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-semibold mb-6">Bookmarked Movies</h1>
        {bookmarks.length > 0 ? (
          <div className="flex flex-wrap gap-6 justify-start">
            {bookmarks.map((movie, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-md w-60 p-3 hover:shadow-lg transition-shadow"
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="rounded-md w-full h-32 object-cover mb-2"
                />
                <h2 className="text-lg font-bold">{movie.title}</h2>
                <p className="text-sm text-gray-300">{movie.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-400">No bookmarks yet.</p>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
