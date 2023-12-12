
import React from 'react'

function HeroSection() {
    return (
        <div>
            <h1
                className="text-6xl font-bold font-fairdisplay italic 
      bg-gradient-to-r from-purple-400 via-green-300 to-blue-500 text-transparent
       bg-clip-text underlined-text pb-3 px-1 hover:scale-95 transition-all"
            >
                AVINYA
                <span className="text-red-500 mx-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    2024
                </span>
            </h1>

            <div className="flex flex-row px-[20%] mt-7 mb-9">
                <img src="/programmer.png" alt="image" className="w-[50%] mr-16" />

                <img src="/VR.png" alt="image" className="w-[50%]" />
            </div>
        </div>
    )
}

export default HeroSection