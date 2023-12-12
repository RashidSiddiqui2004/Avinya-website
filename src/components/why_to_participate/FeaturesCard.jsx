
import React from 'react'

function FeaturesCard(props) {

    const purpleColor = 'rgb(100, 0, 154)';
    const greenColor = 'rgb(160, 240, 250)';
    const whiteColor = 'rgb(0, 0, 0)';
    const blackColor = 'rgb(255, 255, 255)';
    
    const dynamicBackgroundColor = (props.keyvalue % 2 === 0)  ? purpleColor : greenColor;
    const textColor = (props.keyvalue % 2 != 0) ? whiteColor: blackColor ;

    return (

        <div className={`grid gap-[14px] m-4 
        py-7 w-[100%] sm:w-fit px-2 col-span-2 md:col-span-1 font-montserrat h-[100%]`}
        style={{ backgroundColor: dynamicBackgroundColor, color: textColor}}>

            <h3 className='text-4xl md:text-xl font-semibold px-3'>{props.header}</h3>
            <p className='text-lg md:text-md px-1'>{props.description}</p>
        </div>
    )
}

export default FeaturesCard