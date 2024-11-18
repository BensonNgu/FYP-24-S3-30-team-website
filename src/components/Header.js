import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {HomeOutlined as Home, GroupOutlined as Group, MeetingRoomOutlined as MeetingRoom, DescriptionOutlined as Description, AssignmentTurnedInOutlined as AssignmentTurnedIn} from '@mui/icons-material'

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const sectionId = hash.substring(1); // Remove the '#' from hash
      setActiveSection(sectionId); // Set activeSection immediately
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // Detect which section is currently in view
useEffect(() => {
  const observerOptions = {
    root: null, // Viewport
    rootMargin: '0px',
    threshold: Array.from({ length: 11 }, (_, i) => i / 10), // Thresholds from 0.0 to 1.0
  };

  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    // Find the section with the highest intersection ratio
    let mostVisibleEntry = null;

    entries.forEach((entry) => {
      if (!mostVisibleEntry || entry.intersectionRatio > mostVisibleEntry.intersectionRatio) {
        mostVisibleEntry = entry;
      }
    });

    if (mostVisibleEntry && mostVisibleEntry.isIntersecting) {
      setActiveSection(mostVisibleEntry.target.id); // Set the most visible section as active
    }
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);
  
  const isActive = (path) => {
    if (path.startsWith('#')) {
      const sectionId = path.split('#')[1];

      const result =  activeSection === sectionId;
      return result;
    }else{
      return location.pathname === path;
    }
  };

  return (
    <header className="bg-gray-800 p-4 text-white sticky top-0 z-50">
      <div className="container mx-1 lg:mx-auto flex lg:justify-center items-center">
        <h1 className="text-xl font-bold"></h1>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
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
        <nav className="hidden lg:flex md:space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/#home"  className={`hover:text-gray-400 duration-300 ${
                  isActive('#home') ? 'text-yellow-400' : ''
                }`}>Home</Link>
            </li>
            <li>
              <Link to="/team-structure#team" className={`hover:text-gray-400 duration-300 ${
                isActive('/team-structure') ? 'text-yellow-400' : ''
              }`}>Team Structure</Link>
            </li>
            <li>
              <Link to="/meetings#meetings" className={`hover:text-gray-400 duration-300 ${
                isActive('/meetings') ? 'text-yellow-400' : ''
              }`}>Meetings</Link>
            </li>
            <li>
              <Link to="/documents#documents" className={`hover:text-gray-400 duration-300 ${
                isActive('/documents') ? 'text-yellow-400' : ''
              }`}>Initial Documents</Link>
            </li>
            <li>
              <Link to="/final-documents#documents" className={`hover:text-gray-400 duration-300 ${
                isActive('/final-documents') ? 'text-yellow-400' : ''
              }`}>Final Documents</Link>
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
            <li className='flex items-center space-x-4 my-1'>
              <Link to="/#home" className={`text-white hover:text-gray-400 duration-300 flex items-center space-x-4 text-lg ${isActive('#home') ? 'text-yellow-400' : ''}`} onClick={() => setMenuOpen(false)}><Home fontSize='large' className='mr-2'/>Home</Link>
            </li>
            <li className='flex items-center space-x-4 my-1'>
              <Link to="/team-structure#team" className={`text-white hover:text-gray-400 duration-300 flex items-center space-x-4 text-lg ${isActive('/team-structure') ? 'text-yellow-400' : ''}`} onClick={() => setMenuOpen(false)}><Group fontSize='large' className='mr-2' />Team Structure</Link>
            </li>
            <li className='flex items-center space-x-4 my-1'>
              <Link to="/meetings#meetings" className={`text-white hover:text-gray-400 duration-300 flex items-center space-x-4 text-lg ${isActive('/meetings') ? 'text-yellow-400' : ''}`} onClick={() => setMenuOpen(false)}><MeetingRoom fontSize='large' className='mr-2' />Meetings</Link>
            </li>
            <li className='flex items-center space-x-4 my-1'>
              <Link to="/documents#documents" className={`text-white hover:text-gray-400 duration-300 flex items-center space-x-4 text-lg ${isActive('/documents') ? 'text-yellow-400' : ''}`} onClick={() => setMenuOpen(false)}><Description fontSize='large' className='mr-2' />Initial Documents</Link>
            </li>
            <li className='flex items-center space-x-4 my-1'>
              <Link to="/final-documents#documents" className={`text-white hover:text-gray-400 duration-300 flex items-center space-x-4 text-lg ${isActive('final-documents') ? 'text-yellow-400' : ''}`} onClick={() => setMenuOpen(false)}><AssignmentTurnedIn fontSize='large' className='mr-2' />Final Documents</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
