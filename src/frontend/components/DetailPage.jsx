import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailPage = () => {
  const location = useLocation();
  const { movie } = location.state || {};

  if (!movie) {
    return <p>No movie details available</p>;
  }

  const { title, description, image, Year, cast, rating, duration } = movie;

  // Random details for demo purposes
  const randomCast = "John Doe, Jane Smith, Bob Johnson, San Machez, Jessica Lean, Morgen Freeman, Jeda Black, Wig Ranson, Ketty Lake";
  const randomRating = "8.5/10";
  const randomDuration = "2h 15m";
  const randomGenre = "Action, Adventure, Thrill";
  
  // Switch description and Year
  const movieYear = description; // Using description as Year
  const movieDescription = `A thrilling adventure in the year ${Year}.`;

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 lg:p-12 bg-black bg-opacity-70 text-white">
        <div className="flex flex-col lg:flex-row lg:space-x-8 mb-6 w-full max-w-screen-lg">
          <div className="lg:w-1/3 mb-4 lg:mb-0">
          <img 
  src={image} 
  alt={title} 
  className="w-auto h-[72vh] rounded-xl shadow-lg border-4 border-gray-800 object-cover" 
/>

          </div>
          <div className="lg:w-2/3">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-2xl mb-6"><strong>Rating:</strong> {randomRating}</p>
            <p className="text-xl mb-6 mt-4">{movieDescription}</p>
            <div className="flex flex-wrap items-center text-xl mb-6 space-x-6">
              <p><strong>Year:</strong> {movieYear}</p>
              <p><strong>Duration:</strong> {randomDuration}</p>
              <p><strong>Language:</strong> English</p>
              <p><strong>Status:</strong> NA</p>
            </div>
            <div className="mb-6">
              <p className="text-xl font-bold mb-2"><strong>Genre:</strong></p>
              <div className=" text-2xl">
                {randomGenre}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-xl font-bold mb-2"><strong>Cast:</strong></p>
              <div className=" text-2xl">
                {randomCast}
              </div>
            </div>
            <a 
              href="https://www.omdbapi.com/?i=tt3896198&apikey=d4a9f7e&s" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-700 text-white py-2 px-4 rounded-lg text-xl font-bold hover:bg-blue-600 transition-colors"
            >
            Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;