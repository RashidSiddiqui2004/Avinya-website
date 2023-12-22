
import React, { useEffect } from 'react'
import FeaturesCard from './FeaturesCard'
import "./stylesFeatures.css";
import AOS from 'aos'
import 'aos/dist/aos.css'

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
            "Meet innovative new peers, make new connections.",
            "Learn about different tech stacks, see it in action and enhance your skills.",
            "Prize pool worth 8,00,000 INR awaits the competition winners.",
            "Get a real world exposure of a Tech Fest.",
            "Get cool goodies and swags to show off to your friends.",
        ]
    }

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return (
        <div  data-aos="zoom-in" id="whyJoinAvinya" className='mt-24 overflow-x-hidden overflow-hidden'>

            <h1 className='text-3xl md:text-5xl text-white pt-4 text-center md:ml-0
    font-bold hover:scale-[101%] transition-all headerAkira pb-16'> WHY TO PARTICIPATE IN AVINYA 2024</h1>
            <div className='grid grid-cols-2 mx-[24%] md:grid-cols-2 lg:grid-cols-3
            md:w-[70%] md:mx-[15%] gap-12
            md:gap-4 lg:gap-x-8 lg:gap-y-[4px]'>
                {featureObject.titles.map((title, index) =>
                (
                    <div key={index}>
                        <FeaturesCard header={title}
                            description={featureObject.descriptions[index]}
                            keyvalue={index} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyPart