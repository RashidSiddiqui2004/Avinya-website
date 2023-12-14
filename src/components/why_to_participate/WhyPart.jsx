
import React from 'react'
import FeaturesCard from './FeaturesCard'
import "./stylesFeatures.css";

function WhyPart() {

    const featureObject = {
        titles: [
            "GET INSPIRED",
            "MEET NEW FACES",
            "TECH INSIGHTS",
            "PRIZE POOL",
            "OFFLINE EVENT",
            "FREE SWAGS",
        ],
        descriptions: [
            "Compete with creative project ideas and get inspiration for your next project.",
            "Meet innovative new peers, make friends and connections.",
            "Learn about different tech stacks, see it in action and enhance your skills.",
            "Prize Pool of worth INR 8,00,000.",
            "Get a real world exposure of a Tech Fest.",
            "Get cool goodies and swags to show off to your friends.",
        ]
    }

    return (
        <div className='mt-24'>

            <h1 className='text-5xl text-white pt-4 pb-4 text-center md:ml-0
    font-bold hover:scale-[101%] transition-all headerAkira'> WHY TO PARTICIPATE IN AVINYA 2024</h1>

            <div className='grid grid-cols-2 mx-[24%] md:grid-cols-3 md:w-[70%] md:mx-[15%] gap-12
      md:gap-16'>

                {featureObject.titles.map((title, index) =>  
                (
                    
                    <div key={index}>
                        <FeaturesCard header={title} 
                        description={featureObject.descriptions[index]} 
                        keyvalue={index}/>
                    </div>
                ))}


                {/* <div className="grid gap-[14px] m-4 bg-green-400 text-black py-7 w-fit px-2
        col-span-2 md:col-span-1 rounded-s-lg rounded-br-none rounded-bl-2xl rounded-tl-none 
        rounded-tr-xl transition-all rounded-b-2xl hover:scale-[103%] hover:translate-x-2 translate-y-2">
                    <h3 className='text-4xl md:text-xl font-semibold font-serif'>MEET NEW FACES</h3>
                    <p className='text-xl md:text-md'>Meet innovative new peers, make friends and connections.</p>
                </div>
                <div className="grid gap-[14px] m-4 bg-purple-600 py-7 w-fit px-2
        col-span-2 md:col-span-1 rounded-s-lg rounded-br-none rounded-bl-2xl rounded-tl-none 
        rounded-tr-xl transition-all rounded-b-2xl hover:scale-[103%] hover:translate-x-2 translate-y-2">
                    <h3 className='text-4xl md:text-xl font-semibold font-serif'>TECH INSIGHTS</h3>
                    <p className='text-xl md:text-md'>Learn about different tech stacks, see it in action and enhance your skills.</p>
                </div>
                <div className="grid gap-[14px] m-4 bg-green-400 text-black py-7 w-fit px-2
        col-span-2 md:col-span-1 rounded-s-lg rounded-br-none rounded-bl-2xl rounded-tl-none 
        rounded-tr-xl transition-all rounded-b-2xl hover:scale-[103%] hover:translate-x-2 translate-y-2">
                    <h3 className='text-4xl md:text-xl font-semibold font-serif'>PRIZE POOL</h3>
                    <p className='text-xl md:text-md'>Prize Pool of worth INR 8,00,000.</p>
                </div>
                <div className="grid gap-[14px] m-4 bg-purple-600 py-7 w-fit px-2
        col-span-2 md:col-span-1 rounded-s-lg rounded-br-none rounded-bl-2xl rounded-tl-none 
        rounded-tr-xl transition-all rounded-b-2xl hover:scale-[103%] hover:translate-x-2 translate-y-2">
                    <h3 className='text-4xl md:text-xl font-semibold font-serif'>OFFLINE EVENT</h3>
                    <p className='text-xl md:text-md'>Get a real world exposure of a Tech Fest.</p>
                </div>
                <div className="grid gap-[14px] m-4 bg-green-400 text-black py-7 w-fit px-2
        col-span-2 md:col-span-1 rounded-s-lg rounded-br-none rounded-bl-2xl rounded-tl-none 
        rounded-tr-xl transition-all rounded-b-2xl hover:scale-[103%] hover:translate-x-2 translate-y-2">
                    <h3 className='text-4xl md:text-xl font-semibold font-serif'>FREE SWAGS</h3>
                    <p className='text-xl md:text-md'>Get cool goodies and swags to show off to your friends.</p>
                </div> */}

            </div>
        </div>
    )
}

export default WhyPart