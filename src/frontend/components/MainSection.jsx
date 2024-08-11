import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import { CiBookmarkCheck } from 'react-icons/ci';
import { FaRegCirclePlay } from 'react-icons/fa6'; 

import { useNavigate } from 'react-router-dom';

const CardsData = ({ title, description, image, year, cast, rating, duration }) => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/detailpage', { 
      state: { 
        movie: { 
          title, 
          description, 
          image, 
          Year: year, 
          cast, 
          rating, 
          duration 
        } 
      } 
    });
  };

  return (
    <div className="bg-transparent shadow-lg rounded-lg h-40 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 relative group overflow-hidden ml-4">
      <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
      <div className="absolute bottom-0 p-2 bg-gradient-to-t from-black via-transparent to-transparent w-full text-white text-shadow-lg">
        <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold">{title}</h2>
        <p className="text-xs sm:text-sm">{description}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          aria-label={`Bookmark ${title}`} 
          className="absolute top-2 right-2 p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:bg-red-500 transition-colors"
        >
          <CiBookmarkCheck className="text-xl sm:text-2xl text-gray-200 hover:text-gray-700 focus:text-white transition-colors" />
        </button>
        <button 
          onClick={handlePlayClick} 
          className="flex items-center justify-center space-x-2 mb-6 p-2 rounded-3xl bg-transparent group-hover:bg-slate-200 transition-colors"
        >
          <FaRegCirclePlay className="text-xl sm:text-2xl md:text-3xl text-transparent group-hover:text-black transition-colors" />
          <p className="text-xs sm:text-sm md:text-base text-transparent group-hover:text-black font-bold transition-colors">Play</p>
        </button>
      </div>
    </div>
  );
};


const RecommendedCard = ({ title, description, image, year, cast, rating, duration }) => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/detailpage', { 
      state: { 
        movie: { 
          title, 
          description, 
          image, 
          Year: year, 
          cast, 
          rating, 
          duration 
        } 
      } 
    });
  };

  return (
    <div className="bg-transparent shadow-lg rounded-lg ml-4 h-48 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 relative group overflow-hidden">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-xl" />
      <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-white mt-2">{title}</h2>
      <p className="text-xs sm:text-sm text-white">{description}</p>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          aria-label={`Bookmark ${title}`} 
          className="absolute top-2 right-2 p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:bg-red-500 transition-colors"
        >
          <CiBookmarkCheck className="text-xl sm:text-2xl text-gray-200 hover:text-gray-700 focus:text-white transition-colors" />
        </button>
        <button 
          onClick={handlePlayClick} 
          className="flex items-center justify-center space-x-2 p-2 rounded-3xl bg-transparent group-hover:bg-slate-200 transition-colors"
        >
          <FaRegCirclePlay className="text-xl sm:text-2xl md:text-3xl text-transparent group-hover:text-black transition-colors" />
          <p className="text-xs sm:text-sm md:text-base text-transparent group-hover:text-black font-bold transition-colors">Play</p>
        </button>
      </div>
    </div>
  );
};
const CardContainer = () => {
  const [cardsData, setCardsData] = useState([]);
  const [recommendedCards, setRecommendedCards] = useState([]);

  useEffect(() => {
    // Fetch data from the OMDb API
    axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=d4a9f7e&s=Tv+series')
      .then(response => {
        const movies = response.data.Search;

        // Filter out movies without a poster
        const filteredMovies = movies.filter(movie => movie.Poster !== 'N/A');

        const trendingCards = filteredMovies.slice(0, 3).map(movie => ({
          title: movie.Title,
          description: `Year: ${movie.Year}`,
          image: movie.Poster,
          year: movie.Year,
          cast: "John Doe, Jane Smith", // Placeholder cast
          rating: "8.5/10", // Placeholder rating
          duration: "2h 15m" // Placeholder duration
        }));
        const recommendedCards = filteredMovies.slice(3).map(movie => ({
          title: movie.Title,
          description: `Year: ${movie.Year}`,
          image: movie.Poster,
          year: movie.Year,
          cast: "John Doe, Jane Smith", // Placeholder cast
          rating: "8.5/10", // Placeholder rating
          duration: "2h 15m" // Placeholder duration
        }));

        setCardsData(trendingCards);
        setRecommendedCards(recommendedCards);
      })
      .catch(error => {
        console.error('There was an error fetching the movie data!', error);
      });
  }, []);

  return (
    <div className="mx-auto max-w-full lg:max-w-screen-xl">
      
      <h1 className="text-2xl text-start text-white p-4">Trending</h1>
      <div className="flex flex-wrap justify-start gap-8">
        {cardsData.map((card, index) => (
          <CardsData
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            year={card.year}
            cast={card.cast}
            rating={card.rating}
            duration={card.duration}
          />
        ))}
      </div>
      <h1 className="text-2xl text-start text-white p-4 mt-4">Recommended for you</h1>
      <div className="flex flex-wrap justify-start gap-4">
        {recommendedCards.map((card, index) => (
          <RecommendedCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            year={card.year}
            cast={card.cast}
            rating={card.rating}
            duration={card.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;


