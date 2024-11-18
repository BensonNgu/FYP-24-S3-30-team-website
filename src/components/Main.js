import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';



const Main = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the section if there's a hash in the URL
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove '#' from the hash
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


  return (
    <div>
      <Home id="home" />
      <div className=''></div>
      <About id="about" />
    </div>
  );
};

export default Main;
