import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const categories = [
    { name: 'Home', path: '/' },
    { name: 'World', path: '/category/world' },
    { name: 'Business', path: '/category/business' },
    { name: 'Sports', path: '/category/sports' },
    { name: 'Entertainment', path: '/category/entertainment' },
    { name: 'Technology', path: '/category/technology' }
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-lg">
      <div className="responsive-container flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center 
              transition-transform duration-300 group-hover:rotate-12">
              <span className="text-white font-bold text-xl">T20</span>
            </div>
            <span className="text-2xl font-bold text-gray-800 
              transition-colors duration-300 group-hover:text-primary">
              News Channel
            </span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 max-w-md">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search news..." 
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full 
                focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent 
                transition-all duration-300"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary hover:bg-gray-100 p-2 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Menu */}
        <nav className={`
          fixed md:static top-16 left-0 w-full md:w-auto 
          bg-white md:bg-transparent 
          shadow-lg md:shadow-none
          ${isMenuOpen ? 'block' : 'hidden'} md:block
        `}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
            {categories.map((category) => (
              <li key={category.name} className="relative group">
                <Link 
                  to={category.path} 
                  className={`
                    block px-4 py-2 rounded-full 
                    transition-all duration-300 
                    ${location.pathname === category.path 
                      ? 'bg-primary text-white' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-primary'}
                  `}
                >
                  {category.name}
                  {location.pathname === category.path && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                      h-1 w-1 bg-white rounded-full"></span>
                  )}
                </Link>
              </li>
            ))}
            
            {/* Contact Button */}
            <li>
              <Link 
                to="/contact" 
                className="block px-6 py-2 bg-accent text-white rounded-full 
                  hover:bg-opacity-90 transition-colors duration-300 text-center"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
