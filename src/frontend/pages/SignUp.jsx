import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import { auth } from '../../models/Firebase'; // Import auth instance for Firebase authentication
import { MdMovieCreation } from 'react-icons/md'; // Import movie icon for branding

const SignupPage = () => {      
  // State hooks for managing form input values and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Function to handle navigation to the login page
  const handleLoginClick = () => {
    navigate('/loginpage');
  };

  // Function to handle user signup with Firebase Authentication
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered successfully');
      navigate('/loginpage'); // Redirect to login page after successful signup
    } catch (error) {
      setError('Registration failed. Please try again.'); // Set error message if signup fails
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validation checks
    if (!email || !password || !confirmPassword) {
      setError('All fields are required'); // Error if any field is empty
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match'); // Error if passwords do not match
      return;
    }

    handleSignUp(); // Proceed with signup if validation passes
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      {/* Branding section */}
      <div className="mb-8 text-center">
        <MdMovieCreation size={48} className="text-red-600 mx-auto" aria-label="App Logo" />
        <p className="text-white text-3xl mt-2">Entertainment App</p>
      </div>
      {/* Signup form container */}
      <div className="w-full max-w-sm bg-slate-900 shadow-md rounded-lg p-8 border border-slate-700">
        <h2 className="text-2xl font-bold mb-6 text-white">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message if any */}
        <form onSubmit={handleSubmit}>
          {/* Email input field */}
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
          {/* Password input field */}
          <div className="mb-4">
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
          {/* Confirm Password input field */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-white mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Sign Up button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
          {/* Link to login page */}
          <p className="text-white mt-3 flex items-center justify-center">
            Already have an account?
            <span
              onClick={handleLoginClick}
              className="ml-1 text-red-600 hover:text-white cursor-pointer"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
