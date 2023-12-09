
import React from 'react';

function Card({ imageNumber, setImageNumber, imagesList, totalImage, titles, descriptions,
    mobileDescriptions}) {

    // function to move to next image in Gallery
    function changeSlide() {

        let nextImageNumber = (imageNumber == totalImage) ? 1 : imageNumber + 1;
        setImageNumber(nextImageNumber);
    }

    return (
        <div>
            <div className='md:flex md:flex-row mx-[10%] border-2 bg-slate-200 
             rounded-e-2xl'>

                <div className='w-[80%] mx-[10%] md:mx-0 md:w-[40%] md:rounded-sm  sm:max-h-[390px]'>
                    <img src={`img${imagesList[imageNumber - 1]}.jpg`} alt="Gallery Image"
                        className='w-[100%] h-[100%] lg:hover:scale-[104%] rounded-2xl md:rounded-none hover:rounded-lg hover:-translate-x-2 transition-all' />
                </div>


                <div className='h-full w-full py-8 px-8'>
                    <h1 className='text-gray-900 pb-5 font-serif font-semibold 
                    italic text-2xl md:text-6xl'>AVINYA EVENT - {titles[imageNumber - 1]}</h1>

                    <p className='text-slate-700 hidden md:block text-sm md:text-lg italic'>
                        {descriptions[imageNumber - 1]}
                    </p>

                    <p className='text-slate-700 block md:hidden text-sm md:text-lg italic'>
                        {mobileDescriptions[imageNumber - 1]}
                    </p>

                    <button className='bg-green-300 text-slate-900 my-7 px-3 py-3 
                    text-lg outline-none outline-offset-1 hover:scale-105 hover:bg-green-400 transition-all 
                    border-none cursor-pointer' onClick={changeSlide}>Explore More Images</button>
                </div>
            </div>
        </div>
    )
}

export default Card