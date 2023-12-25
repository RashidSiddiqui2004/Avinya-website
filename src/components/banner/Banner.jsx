import React from "react";
import myImage1 from "./AVINYA_BANNER1.jpg";
import myImage2 from "./AVINYA_BANNER2.jpg";
import "./banner.css";

const MyImageComponent = () => {
  return (
    <div className="banner-container">
      <img
        src={window.innerWidth >= 432 ? myImage1 : myImage2}
        alt="banner"
        className="banner-image"
        id="banner-image"
      />
      <div className="text-overlay">
        <div className="centered font-[drummer]" id="avinya">
          AVINYA
        </div>
        <div className="centered font-[drummer]" id="age">
          18 - 21
        </div>
        <div className="centered font-[drummer]" id="month">
          January
        </div>
      </div>
    </div>
  );
};

export default MyImageComponent;
