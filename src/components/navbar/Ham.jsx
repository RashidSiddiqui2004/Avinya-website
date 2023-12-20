import React, { useState } from 'react';
import './Ham.css'; // You can create a separate CSS file for styling
import TeamPage  from "../team/TeamPage";


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <ul className="menu-items">
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">EVENTS</a></li>
          <li><a href="#">GALLERY</a></li>
          <li><a href="#">SPONSORS</a></li>
          <li><a href="#">OUR TEAM</a></li>
          
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
