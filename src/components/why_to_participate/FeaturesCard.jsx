
import React from 'react';

function FeaturesCard(props) { 

  const state = props?.keyvalue % 2 ===0;
  
  return (

    <>
     {
      state ? 
       (
      <div
      className={`-ml-14 grid gap-1 md:gap-[14px] m-0 md:m-4 py-7 md:w-[100%]
      h-[200px] md:h-[250px] lg:h-[320px] w-fit
      xl:h-[260px] sm:w-fit min-w-[134px]
      px-3 col-span-1 font-montserrat duration-300
      ease-in-out transform text-white bg-purple hover:bg-white hover:text-black
      transition-all`} 
    >
      <h3 className='text-md text-center sm:text-4xl md:text-2xl lg:text-3xl font-semibold px-3
       hover:text-purple pb-3'>{props.header}</h3>
      <p className='text-xs md:text-lg xl:text-lg px-0 md:px-5'>{props.description}</p>
    </div>)
      :  
      (
        <div
        className={`grid gap-1 md:gap-[14px] m-0 md:m-4 py-7
        md:w-[100%] h-[200px] md:h-[250px] lg:h-[320px] w-fit px-3
        xl:h-[260px] sm:w-fit  min-w-[134px] col-span-1 
        font-montserrat duration-300 ease-in-out transform  
        text-black bg-green hover:bg-white hover:text-black
         transition-all`} 
      >
        <h3 className='text-md text-center sm:text-4xl md:text-2xl lg:text-3xl font-semibold px-2
       hover:text-purple pb-3'>{props.header}</h3>
        <p className='text-xs md:text-lg  xl:text-lg px-0 md:px-5'>{props.description}</p>
      </div>)
    }
    </>

  );
   
}

export default FeaturesCard;








 