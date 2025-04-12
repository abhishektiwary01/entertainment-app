import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const ProfilePage = () => {
  const navigate = useNavigate()
  
  const handleeditclick =()=>{

  }
  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem("token") // adjust this key if needed
    // Redirect to login
    navigate("/loginpage")
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 border-b border-gray-700 pb-6">
          <img
            src="/pfp3_d7855f9562.webp" // Corrected path for public folder
            alt="User Avatar"
            className="w-20 h-20 rounded-full border-2 border-cyan-400 object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-cyan-400 font-medium">Premium Member</p>
          </div>
        </div>

        {/* Watch History */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Favorites</h3>
          <ul className="space-y-2 list-none">
            <li className="block border-b border-gray-800 pb-2">🔥 Avengers: Endgame</li>
            <li className="block border-b border-gray-800 pb-2">🎬 Stranger Things</li>
            <li className="block border-b border-gray-800 pb-2">🎤 The Voice - Season 10</li>
          </ul>
        </div>

        {/* Favorite Genres */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Favorite Genres</h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-800 px-4 py-1 rounded-full text-sm border border-cyan-400">Action</span>
            <span className="bg-gray-800 px-4 py-1 rounded-full text-sm border border-cyan-400">Comedy</span>
            <span className="bg-gray-800 px-4 py-1 rounded-full text-sm border border-cyan-400">Sci-Fi</span>
          </div>
        </div>

        {/* Settings */}
        <div className="mt-8 space-y-4">
          {/* <h3 className="text-xl font-semibold">Settings</h3> */}
          {/* <button 
          onClick={handleeditclick}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md transition">
            Edit Profile
          </button> */}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
