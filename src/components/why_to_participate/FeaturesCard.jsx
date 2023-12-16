
import React, { useState } from 'react';

function FeaturesCard(props) { 

  const [state, setState] = useState(props?.keyvalue % 2 ===0);

    const purpleColor = 'rgb(100, 0, 154)';
    const greenColor = 'rgb(160, 240, 250)';
    const whiteColor = 'rgb(0, 0, 0)';
    const blackColor = 'rgb(255, 255, 255)';
  
  const dynamicBackgroundColor = state ? 'purple' : 'green';

  const textColor = state ? 'black' : 'white';

  return (
    <div
  className={`grid gap-[14px] m-4 py-7 w-[100%] sm:w-fit px-2 col-span-2 md:col-span-1 
  font-montserrat h-[100%] duration-300 ease-in-out transform  
  text-${textColor} bg-${dynamicBackgroundColor} hover:bg-white hover:text-black
   transition-all`}
  // style={{ backgroundColor: dynamicBackgroundColor, color: textColor}}
>
  <h3 className='text-2xl text-center sm:text-4xl md:text-2xl font-semibold px-3 hover:text-purple'>{props.header}</h3>
  <p className='text-lg md:text-md px-1'>{props.description}</p>
</div>
  );
}

export default FeaturesCard;


// import React from 'react'

// function FeaturesCard(props) {

//     const purpleColor = 'rgb(100, 0, 154)';
//     const greenColor = 'rgb(160, 240, 250)';
//     const whiteColor = 'rgb(0, 0, 0)';
//     const blackColor = 'rgb(255, 255, 255)';
    
//     const dynamicBackgroundColor = (props.keyvalue % 2 === 0)  ? purpleColor : greenColor;
//     const textColor = (props.keyvalue % 2 != 0) ? whiteColor: blackColor ;
    
//     return (

//         <div className={`grid gap-[14px] m-4 
//         py-7 w-[100%] sm:w-fit px-2 col-span-2 md:col-span-1 font-montserrat h-[100%]
//         hover:${(props.keyvalue % 2 ==0) ? backgroundColor:greenColor : backgroundColor: purpleColor }`}
//         style={{ backgroundColor: dynamicBackgroundColor, color: textColor}}>
//             <h3 className='text-2xl text-center sm:text-4xl md:text-2xl font-semibold px-3'>{props.header}</h3>
//             <p className='text-lg md:text-md px-1'>{props.description}</p>
//         </div>
//     )
// }

// export default FeaturesCard