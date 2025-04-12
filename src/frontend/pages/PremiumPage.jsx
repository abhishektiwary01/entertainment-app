import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const PremiumPage = () => {
  const navigate = useNavigate();

  const onplanclick = () => {
    navigate('/payment');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black font-poppins px-4 py-10 bg-no-repeat bg-cover bg-center">
      <Navbar />
      <h1 className="text-center text-5xl md:text-6xl text-yellow-500 mb-8">
        CinePlex Premium
      </h1>

      <div className="w-full max-w-5xl rounded-lg shadow-2xl bg-gray-900 bg-opacity-90 p-8">
        <div className="flex justify-between mb-6 px-6">
          <p className="text-2xl text-white font-semibold w-1/2"></p>
          <p className="text-2xl text-white font-semibold w-1/4 text-center border-b-2 border-yellow-500">
            Mobile
          </p>
          <p className="text-2xl text-white font-semibold w-1/4 text-center border-b-2 border-yellow-500">
            Super
          </p>
        </div>

        <div className="space-y-4">
          {[
            { feature: 'All Content', mobile: 'Available', super: 'Available' },
            { feature: 'Watch on TV & Laptop', mobile: 'Not Available', super: 'Available' },
            { feature: 'No of devices that can be logged in', mobile: '2', super: '4' },
            { feature: 'Max Video Quality', mobile: '720p', super: '1080p' },
            { feature: 'Max Audio Quality', mobile: 'Stereo', super: 'Dolby 5.1' },
            { feature: 'Critic Reviews', mobile: 'Not Available', super: 'Available' },
          ].map((row, idx) => (
            <div key={idx} className="flex justify-between px-6">
              <p className="text-lg text-white w-1/2">{row.feature}</p>
              <p className="text-sm text-white w-1/4 text-center">{row.mobile}</p>
              <p className="text-sm text-white w-1/4 text-center">{row.super}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center justify-center mt-10 space-x-4">
        <button
          className="w-60 h-20 text-white border border-white shadow-2xl rounded-md bg-gray-900 bg-opacity-80 flex flex-col justify-center items-center"
          onClick={onplanclick}
        >
          <span className="text-lg font-semibold">Mobile</span>
          <span className="text-sm">49 / Month</span>
        </button>
        <button
          className="w-60 h-20 text-white border border-white shadow-2xl rounded-md bg-gray-900 bg-opacity-80 flex flex-col justify-center items-center"
          onClick={onplanclick}
        >
          <span className="text-lg font-semibold">Mobile</span>
          <span className="text-sm">499 / Year</span>
        </button>
        <button
          className="w-60 h-20 text-white border border-white shadow-2xl rounded-md bg-gray-900 bg-opacity-80 flex flex-col justify-center items-center"
          onClick={onplanclick}
        >
          <span className="text-lg font-semibold">Super</span>
          <span className="text-sm">899 / Year</span>
        </button>
      </div>
    </div>
  );
};

export default PremiumPage;
