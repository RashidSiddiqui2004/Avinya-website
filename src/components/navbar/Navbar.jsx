import React from "react";
import Ham from "./Ham";
import "./Navbar.css";
import { Link } from "react-router-dom";
import TeamPage from "../team/TeamPage";

export default function Navbar({ homeUrl }) {
  return (
    <>
      <div className="ham">
        <Ham homeUrl={"/#"} />
      </div>
      <div class="navbar">
        <div class="nav-item"><a className="c1" href={homeUrl}><span className="c2"> HOME</span></a></div>
        <div class="nav-item"><a className="c1" href="/#about"><span className="c2"> ABOUT</span></a></div>
        <div class="nav-item"><a className="c1" href="/#events"><span className="c2" >EVENTS</span></a></div>
        <div class="nav-item"><a className="c1" href="/#gallery"><span className="c2 " >GALLERY</span></a></div>
        <div class="nav-item"><a className="c1" href="/#sponsors"><span className="c2" >SPONSORS</span></a></div>
        <div class="nav-item"><Link to={"/team"} className="c1"><span className="c2">OUR TEAM</span ></Link></div>
  </div>
    </>
  );
}
