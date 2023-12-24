import React from 'react';
import myImage from './AVINYA_BANNER1.png';
import './banner.css';

const MyImageComponent = () => {
  return (
    <div className='banner-container'>
      <img src={myImage} alt="banner" className='banner-image' />
      <div className='text-overlay'>
        <div className='centered' id='avinya'>AVINYA</div>
        <div className='centered' id='age'>18 - 21</div>
        <div className='centered' id='month'>January</div>
      </div>
    </div>
  );
};

export default MyImageComponent;
