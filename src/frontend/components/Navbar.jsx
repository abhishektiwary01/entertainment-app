import React, { useState } from 'react';
import { HiHome } from 'react-icons/hi'; //import home icon
import { MdLocalMovies, MdMovieCreation } from 'react-icons/md'; //import movie icons
import { PiTelevisionBold } from 'react-icons/pi'; // import TV icons
import { CiBookmarkCheck } from 'react-icons/ci'; // import bookmark icons
import { NavLink } from 'react-router-dom';  // import nav link for links
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed top-0 left-0 h-4/5 w-16 bg-gray-900 rounded-xl flex flex-col items-center py-4 mt-6 ml-6">
      {/* App Logo */}
      <MdMovieCreation className="text-3xl mb-6 text-red-700" />

      {/* Navigation Links */}
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? 'text-white' : 'text-slate-700 hover:text-red-700 transition-colors duration-300'
        }
      >
        <HiHome className="text-3xl mb-6" />
      </NavLink>

      <NavLink
        to="/movie"
        className={({ isActive }) =>
          isActive ? 'text-white' : 'text-slate-700 hover:text-red-700 transition-colors duration-300'
        }
      >
        <MdLocalMovies className="text-3xl mb-6" />
      </NavLink>

      <NavLink
        to="/tvseries"
        className={({ isActive }) =>
          isActive ? 'text-white' : 'text-slate-700 hover:text-red-700 transition-colors duration-300'
        }
      >
        <PiTelevisionBold className="text-3xl mb-6" />
      </NavLink>

      <NavLink
        to="/bookmarks"
        className={({ isActive }) =>
          isActive ? 'text-white' : 'text-slate-700 hover:text-red-700 transition-colors duration-300'
        }
      >
        <CiBookmarkCheck className="text-3xl mb-6" />
      </NavLink>

      {/* Profile Image with Logout */}
      <div
        className="relative mt-auto mb-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <NavLink
          to="/Loginpage"
          className={({ isActive }) =>
            isActive
              ? 'text-white'
              : 'text-slate-700 hover:text-red-700 transition-colors duration-300'
          }
        >
         <MdOutlineAccountCircle className="text-4xl mb-4 text-gray-600 hover:text-white "  />
        </NavLink>
        {isHovered && (
          <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-3 bg-red-600 text-white text-xs sm:text-sm font-bold py-2 px-3 rounded-lg shadow-lg">
            Log out
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
