import React from 'react';
import myImage from '/Users/anirudhprajapati/Desktop/Avinya/my-react-app/src/avinya_banner.png'; // Replace with the actual path to your image file

const MyImageComponent = () => {
  return (
    <div>
      
      <img src={myImage} alt="banner" style={componentStyle}/>
    </div>
  );
}

const componentStyle = {
  width : '100%'
};

export default MyImageComponent;
