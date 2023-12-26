import React from "react";
import Ham from "./Ham";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ homeUrl }) {
  return (
    <>
      <div className="ham">
        <Ham homeUrl={"/"} />
      </div>
      <nav className="nav mt-6">
        <div className="nav-item home">
          <a className="nav-a" href={homeUrl}>
            HOME
          </a>
        </div>
        <div className="nav-item about">
          <a className="nav-a" href="/#about">
            ABOUT
          </a>
        </div>
        <div className="nav-item gall">
          <a className="nav-a" href="/#events">
            EVENTS
          </a>
        </div>
        <div className="nav-item gall2 gall">
          <a className="nav-a" href="/#gallery">
            GALLERY
          </a>
        </div>
        <div className="nav-item team sponsors">
          <a className="nav-a team" href="/#sponsors">
            SPONSORS
          </a>
        </div>
        <div className="nav-item team">
          <Link to={"/team"} className="nav-a team">
            OUR TEAM
          </Link>
        </div>
      </nav>
    </>
  );
}
