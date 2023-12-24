import React from 'react';
import myImage from './avinya_banner.png'; // Replace with the actual path to your image file

const MyImageComponent = () => {
  return (
    <div>
      
      <img src={myImage} alt="banner" style={componentStyle}/>
    </div>
  );
}

const componentStyle = {
  width : '100%',
  height: '90%'
};

export default MyImageComponent;
