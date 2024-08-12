import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailPage = () => {
  // Use useLocation to get the state passed from the previous page
  const location = useLocation();
  const { movie } = location.state || {}; // Destructure movie from location state

  // If no movie details are available, show a fallback message
  if (!movie) {
    return <p>No movie details available</p>;
  }

  // Destructure movie details from the movie object
  const { title, description, image, Year, cast, rating, duration } = movie;

  // Random details for demo purposes
  const randomCast = "John Doe, Jane Smith, Bob Johnson, San Machez, Jessica Lean, Morgen Freeman, Jeda Black, Wig Ranson, Ketty Lake";
  const randomRating = "8.5/10";
  const randomDuration = "2h 15m";
  const randomGenre = "Action, Adventure, Thrill";
  
  // Switch description and Year for demo purposes
  const movieYear = description; // Using description as Year
  const movieDescription = `A thrilling adventure in the year ${Year}.`;

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Container for movie details */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 lg:p-12 bg-black bg-opacity-70 text-white mt-10">
        {/* Layout for image and details */}
        <div className="flex flex-col lg:flex-row lg:space-x-8 mb-6 w-full max-w-screen-lg">
          {/* Image section */}
          <div className="lg:w-1/3 mb-4 lg:mb-0">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto rounded-xl shadow-lg border-4 border-gray-800 object-cover" 
            />
          </div>
          {/* Details section */}
          <div className="lg:w-2/3">
            {/* Movie title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
            {/* Movie rating */}
            <p className="text-xl md:text-2xl mb-6"><strong>Rating:</strong> {randomRating}</p>
            {/* Movie description */}
            <p className="text-lg md:text-xl mb-6 mt-4">{movieDescription}</p>
            {/* Movie details like Year, Duration, Language, and Status */}
            <div className="flex flex-wrap items-center text-lg md:text-xl mb-6 space-x-6">
              <p><strong>Year:</strong> {movieYear}</p>
              <p><strong>Duration:</strong> {randomDuration}</p>
              <p><strong>Language:</strong> English</p>
              <p><strong>Status:</strong> NA</p>
            </div>
            {/* Movie genre */}
            <div className="mb-6">
              <p className="text-lg md:text-xl font-bold mb-2"><strong>Genre:</strong></p>
              <div className="text-xl md:text-2xl">
                {randomGenre}
              </div>
            </div>
            {/* Movie cast */}
            <div className="mb-6">
              <p className="text-lg md:text-xl font-bold mb-2"><strong>Cast:</strong></p>
              <div className="text-xl md:text-2xl">
                {randomCast}
              </div>
            </div>
            {/* Link to external website */}
            <a 
              href="https://www.omdbapi.com/?i=tt3896198&apikey=d4a9f7e&s" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-700 text-white py-2 px-4 rounded-lg text-lg md:text-xl font-bold hover:bg-blue-600 transition-colors"
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
