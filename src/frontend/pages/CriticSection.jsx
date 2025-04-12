import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

// Reusable Video Player Component
const VideoPlayer = ({ videoRef, played, setPlayed, buttonColor, buttonText }) => {
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlayed(true);
    }
  };

  return (
    <div className="my-6">
      {!played && (
        <button
          onClick={handlePlay}
          className={`px-4 py-2 ${buttonColor} text-white rounded-md mb-4`}
        >
          {buttonText}
        </button>
      )}
      <video
        ref={videoRef}
        controls
        style={{ display: played ? 'block' : 'none' }}
        width="560"
        height="315"
      >
        <source src="/Bahubali_ Rise of a Forgotten King-VEED.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const CriticSection = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const [played1, setPlayed1] = useState(false);
  const [played2, setPlayed2] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <SearchBar />

      <div className="mx-auto px-4 lg:px-32 py-10">
        <h1 className="text-3xl font-semibold mb-8">Movie Critic Review</h1>

        <VideoPlayer
          videoRef={videoRef1}
          played={played1}
          setPlayed={setPlayed1}
          buttonColor="bg-blue-600"
          buttonText="Play Video 1"
        />

        <VideoPlayer
          videoRef={videoRef2}
          played={played2}
          setPlayed={setPlayed2}
          buttonColor="bg-green-600"
          buttonText="Play Video 2"
        />
      </div>
    </div>
  );
};

export default CriticSection;
