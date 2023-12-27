import React, { useState } from "react";
import "./Ham.css";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ homeUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? (
          <>
            <div className="cross md:-ml-2">X</div>
          </>
        ) : (
          <>
            <div className="px-2 md:-ml-2">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </>
        )}
      </div>
      {isOpen && (
        <ul
          className="menu-items text-left -ml-1 -mt-4 max-w-[60px]"
          onClick={toggleMenu}
        >
          <li>
            <a href={homeUrl}>HOME</a>
          </li>
          <li>
            <a href="/#about">ABOUT</a>
          </li>
          <li>
            <a href="/#events">EVENTS</a>
          </li>
          <li>
            <a href="/#gallery">GALLERY</a>
          </li>
          <li>
            <a href="/#sponsors">SPONSORS</a>
          </li>
          <li>
            <Link to={"/team"}>
              <a className="nav-a" href="/team">
                TEAM
              </a>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
