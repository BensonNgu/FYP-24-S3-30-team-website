import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to section when the URL hash changes
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <header className="bg-gray-800 p-4 text-white sticky top-0 z-50">
      <div className="container mx-auto flex md:justify-center items-center">
        <h1 className="text-xl font-bold"></h1>

        {/* Hamburger Icon for Mobile */}
        <div className="block md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation Menu for larger screens */}
        <nav className="hidden md:flex md:space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/#home" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/#about" className="hover:text-gray-400">About</Link>
            </li>
            <li>
              <Link to="/team-structure" className="hover:text-gray-400">Team Structure</Link>
            </li>
            <li>
              <Link to="/meetings" className="hover:text-gray-400">Meetings</Link>
            </li>
            <li>
              <Link to="/documents" className="hover:text-gray-400">Documents</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sidebar for mobile screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 z-50 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="focus:outline-none text-white mb-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="space-y-4">
            <li>
              <Link to="/#home" className="text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/#about" className="text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/team-structure" className="text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>Team Structure</Link>
            </li>
            <li>
              <Link to="/meetings" className="text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>Meetings</Link>
            </li>
            <li>
              <Link to="/documents" className="text-white hover:text-gray-400" onClick={() => setMenuOpen(false)}>Documents</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
