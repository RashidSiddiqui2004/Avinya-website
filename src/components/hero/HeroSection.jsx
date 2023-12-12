
import React from 'react'

function HeroSection() {
    return (
        <div>
            <h1
                className="text-6xl font-bold font-fairdisplay headerAkira 
             pb-3 px-1 hover:scale-95 transition-all"
            >
                AVINYA  <span className='ml-2'> 2024</span> 
       
            </h1>

            <div className="flex flex-row px-[20%] mt-7 mb-9">
                <img src="/programmer.png" alt="image" className="w-[50%] mr-16" />

                <img src="/VR.png" alt="image" className="w-[50%]" />
            </div>
        </div>
    )
}

export default HeroSection