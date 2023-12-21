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
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#events">EVENTS</a></li>
          <li><a href="#gallery">GALLERY</a></li>
          <li><a href="#sponsors">SPONSORS</a></li>
          <li><a href="#team">OUR TEAM</a></li>
          
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;