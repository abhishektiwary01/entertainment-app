import React, { useEffect, useState } from 'react';
import axios from 'axios'; //axios for making HTTP request
import Navbar from '../components/Navbar'; // import navbar
import SearchBar from '../components/SearchBar'; //import searchbar
import { CiBookmarkCheck } from 'react-icons/ci';   
import { FaRegCirclePlay } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom'; 

const handleBookmark = async () => {
  navigate('/bookmarks');  //navigates to bookmarks page 
};

const MoviesCard = ({ title, description, image, year, cast, rating, duration }) => {
  const navigate = useNavigate();
  
  const handlePlayClick = () => {
    const movie = { title, description, image, year, cast, rating, duration };
    navigate('/detailpage', { state: { movie } });
  };
  return (
<div className="relative bg-transparent shadow-lg rounded-lg m-3 h-44 w-60 max-w-xs group">
  <img src={image} alt={title} className="w-full h-32 object-cover rounded-xl" />
  <h2 className="text-sm sm:text-base font-bold text-white mt-2">{title}</h2>
  <p className="text-xs sm:text-sm text-white">{description}</p>
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
    <button 
      onClick={handleBookmark}
      className='absolute top-2 right-2 p-2 rounded-full bg-gray-700 hover:bg-white focus:bg-red-500 transition-colors'
    >
      <CiBookmarkCheck className='text-xl text-gray-200 hover:text-gray-700 focus:text-white transition-colors' />
    </button>
    <button 
      onClick={handlePlayClick} 
      className="flex items-center justify-center space-x-2 p-2 rounded-full bg-transparent group-hover:bg-slate-200 transition-colors"
    >
      <FaRegCirclePlay className="text-2xl text-transparent group-hover:text-black transition-colors" />
      <p className="text-xs sm:text-sm text-transparent group-hover:text-black font-bold transition-colors">Play</p>
    </button>
  </div>
</div>

  );
};


const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=d4a9f7e&s=movie');
        const moviesWithPosters = response.data.Search.filter(movie => movie.Poster !== 'N/A');
        setMovies(moviesWithPosters);
      } catch (error) {
        console.error('Error fetching data from OMDb API:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className=" min-h-screen">
      <Navbar />
      <SearchBar />
      <div className="p-2 sm:p-4 lg:p-4">
        <h1 className="text-2xl text-start text-white ml-32">Movies</h1>
        <div className="flex flex-wrap justify-start gap-4 sm:gap-6 lg:gap-8 ml-28">
          {movies.map((movie, index) => (
            <MoviesCard
              key={index}
              title={movie.Title}
              description={movie.Year}
              image={movie.Poster}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default MoviePage;