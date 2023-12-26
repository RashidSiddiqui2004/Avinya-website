import React from "react";
import Ham from "./Ham";
import "./Navbar.css";
import { Link } from "react-router-dom";
import TeamPage from "../team/TeamPage";

export default function Navbar({ homeUrl }) {
  return (
    <>
      <div className="ham">
        <Ham homeUrl={"/"} />
      </div>
      <div class="navbar">
  <div class="nav-item"><a href={homeUrl}><span>HOME</span></a></div>
  <div class="nav-item"><a href="/#about"><span>ABOUT</span></a></div>
  <div class="nav-item"><a href="/#events"><span>EVENTS</span></a></div>
  <div class="nav-item"><a href="/#gallery"><span>GALLERY</span></a></div>
  <div class="nav-item"><a href="/#sponsors"><span>SPONSORS</span></a></div>
  <div class="nav-item"><Link to={"/team"}><span>OUR TEAM</span></Link></div>
  </div>
    </>
  );
}
