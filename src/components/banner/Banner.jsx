import React from 'react';
import myImage from './avinya_banner.png';
import './banner.css';

const MyImageComponent = () => {
  return (
    <div>
      <img src={myImage} alt="banner" className='banner' />
    </div>
  );
};


export default MyImageComponent;
