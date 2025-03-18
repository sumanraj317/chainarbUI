import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/chainarb.PNG';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  // Change text color based on the page
  const textColor = isHomePage ? "text-white" : "text-black";
  const iconColor = isHomePage ? "text-white" : "text-black";

  // Handle "Home" button click
  const handleHomeClick = (e) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-transparent border-b border-gray-300 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div>
          <Link to="/" onClick={handleHomeClick}>
            <img
              src={logo}
              alt="ChainArb Logo"
              className="h-12 md:h-14 transition-transform transform hover:scale-110 drop-shadow-lg"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center space-x-8 ${textColor}`}>
          <Link to="/" onClick={handleHomeClick} className={`text-lg font-medium hover:text-blue-400 transition-all duration-300`}>
            Home
          </Link>
          <Link to="/about" className="text-lg font-medium hover:text-blue-400 transition-all duration-300">
            About
          </Link>
          <Link to="/features" className="text-lg font-medium hover:text-blue-400 transition-all duration-300">
            Features
          </Link>
          <Link to="/contact" className="text-lg font-medium hover:text-blue-400 transition-all duration-300">
            Contact
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="transition duration-300 hover:text-blue-400">
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="px-5 py-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="transition duration-300 hover:text-blue-400">
                Login
              </Link>
              <Link to="/signup" className="px-5 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition duration-300">
                Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? (
            <FaTimes size={28} className={iconColor} />
          ) : (
            <FaBars size={28} className={iconColor} />
          )}
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md p-6 flex flex-col items-center space-y-6 text-white shadow-lg">
            <Link to="/" onClick={handleHomeClick} className="text-xl hover:text-blue-400 transition duration-300">
              Home
            </Link>
            <Link to="/about" className="text-xl hover:text-blue-400 transition duration-300">
              About
            </Link>
            <Link to="/features" className="text-xl hover:text-blue-400 transition duration-300">
              Features
            </Link>
            <Link to="/contact" className="text-xl hover:text-blue-400 transition duration-300">
              Contact
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-xl hover:text-blue-400 transition duration-300">
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="w-full px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-xl hover:text-blue-400 transition duration-300">
                  Login
                </Link>
                <Link to="/signup" className="w-full px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
