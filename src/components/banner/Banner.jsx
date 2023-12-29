import React from "react";   
import "./banner.css";

const myImage3 = "https://res.cloudinary.com/drlkkozug/image/upload/v1703826766/Avinya_Final_Name_uzgvd7.png";
const myImage1 ="https://res.cloudinary.com/doyheqz2f/image/upload/v1703788912/AVINYA_BANNER1_fjib32.jpg";
const myImage2 = "https://res.cloudinary.com/drlkkozug/image/upload/v1703826767/AVINYA_BANNER2_mhpiuu.jpg";
 
const MyImageComponent = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  paddingTop : '10%',
  
};

const buttonStyle = {
  height: '44px',
  width: '312px',
 
};
  return (
    <div className="banner-container">
      <img
        src={window.innerWidth >= 432 ? myImage1 : myImage2}
        alt="banner"
        className="banner-image flex  justify-center items-center w-screen h-screen bg-cover mb-10 bg-center"
        id="banner-image"
      />
     
      <div className="text-overlay">
      <img src={myImage3} alt="Avinya" className="avinya_name"/>
        <div>
          <div className="centered font-[drummer]" id="age">
            18 - 21
          </div>
          <div className="centered font-[drummer]" id="month">
            January
          </div>
        
        </div>
        

        <div style={containerStyle}>
              <div
                className="apply-button"
                data-hackathon-slug="innovatensut24"
                data-button-theme="dark"
                style={{ ...buttonStyle, margin: 'auto' }}
              >
             
              </div>
        </div>
      </div>
      
    </div>
  );
};



export default MyImageComponent;
