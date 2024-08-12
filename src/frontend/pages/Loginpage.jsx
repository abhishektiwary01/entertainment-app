import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../models/Firebase';
import { MdMovieCreation } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loginpage = () => {
  // State variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Hook to programmatically navigate to different routes
  const navigate = useNavigate();

  // Handler function for the "Sign Up" link click
  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the Sign Up page
  };

  // Handler function for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Basic validation to check if email and password are provided
    if (!email || !password) {
      toast.error('Both email and password are required.');
      return;
    }

    try {
      // Attempt to sign in with the provided email and password using Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');
      toast.success('Login successful! Redirecting to home...');
      setTimeout(() => {
        navigate('/home'); // Redirect to the home page after successful login
      }, 2000); // Delay the redirection to show the success message
    } catch (error) {
      // Display error message if login fails
      toast.error('Invalid email or password.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      {/* Logo and App Title */}
      <div className="mb-8 text-center">
        <MdMovieCreation size={48} className="text-red-600 mx-auto" aria-label="App Logo" />
        <p className="text-white text-3xl mt-2">Entertainment App</p>
      </div>
      
      {/* Login Form Container */}
      <div className="w-full max-w-sm bg-slate-900 shadow-md rounded-lg p-8 border border-slate-700">
        <h2 className="text-2xl font-bold mb-6 text-white">Login</h2>
        
        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          {/* Password Input Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-white mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
          
          {/* Sign Up Prompt */}
          <p className="text-white mt-3 flex items-center justify-center">
            Don't have an account?
            <span
              onClick={handleSignUpClick}
              className="ml-1 text-red-600 hover:text-white cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>

      {/* Toast Container for displaying notifications */}
      <ToastContainer />
    </div>
  );
};

export default Loginpage;
