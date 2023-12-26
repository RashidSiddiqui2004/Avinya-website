// TeamPage.js

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/footer";
import Nav from "../navbar/Navbar";
import InitialLoader from "../intialLoader/InitialLoader";
import "./team.css";
// import ImageOverlay from "./ImageOverlay";
import img from "./img1.jpg";
import TeamSection from "./TeamSection";

// images import
import sarthak from "./por_photos/Sarthak_srivastava.jpg";
import yashwani from "./por_photos/yashwani.jpg";
import dhruv_garg from "./por_photos/Dhruv_Garg.jpg";
import rinav from "./por_photos/rinav.jpg";
import harshit from "./por_photos/Harshit.png";
import rahul_sahay from "./por_photos/Rahul_Sahay.jpg";
import dhruv_deora from "./por_photos/Dhruv_deora.jpg";
import chirag from "./por_photos/Chirag.jpg";
import atish_malik from "./por_photos/Aatish_malik_por_pic.jpg";
import manvi from "./por_photos/Manvi.jpg";
import priyanshu from "./por_photos/Priyanshu Sharma.jpg";
import uttkarsh from "./por_photos/Utkarsh_Maurya.jpg";
import aryan_chourey from "./por_photos/Aryan Chourey.jpg";
import yash_chandra from "./por_photos/Yash_Chandra.png";
import adib_ahmed from "./por_photos/Adib_Ahmed_Siddiqui.jpeg";

const memberData = [
  {
    role: "Chief Convener",
    members: [
      { name: "Sarthak", image: sarthak },
      { name: "Ayush", image: "/SexyMonke.jpg" },
      
    ],
  },
  {
    role: "Co Convener",
    members: [
      { name: "Yashwani", image: yashwani },
      { name: "Dhruv", image: dhruv_garg },
      
    ],
  },
 
];

const TeamPage = () => {
  useEffect(() => {
    new AOS.init({ duration: 1500 });
  }, []);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div>
      {loading ? (
        <InitialLoader />
      ) : (
        <>
          <div className="content mb-5 lg:mb-10">
            <div className="Banner  ">
              <Nav homeUrl="/" />
            </div>
            <div
              className="flex justify-center items-center w-screen h-screen bg-cover bg-center"
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              <div
                className="p-8"
                style={{
                  textShadow:
                    "0 0 10px rgba(238, 194, 51, 0.8), 0 0 20px rgba(231, 172, 63, 0.801), 0 0 30px rgba(255, 255, 255, 0.8)",
                }}
              >
                <h1 className="text-center font-extrabold font-[drummer] text-7xl lg:text-9xl text-purple-700">
                  OUR TEAM
                </h1>
              </div>
            </div>

            {memberData.map((roleData, index) => (
              <TeamSection key={index} title={roleData.role}>
                {roleData.members.map((member, memberIndex) => (
                <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px] ">
                  
                    <div
                      key={memberIndex}
                      className="team-member flex justify-center p-0 "
                    >
                      <img
                        src={member.image}
                        className="w-full h-full object-cover"
                        alt={member.name}
                        style={{
                          clipPath:
                            "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                        }}
                      />
                      <div className="bg-cyan-400 p-5"></div>

                      {/* Text Overlay */}
                      <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-0 px-0 z-20 ">
                        <div className="font-bold text-3xl text-black transform -rotate-90 
                        -translate-x-5 font-['Drummer']">
                          {member.name}
                          <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                            {roleData.role}
                          </p>
                        </div>
                      </div>
                    </div>
                 
                </div>
                 ))}
              </TeamSection>
            ))}

            <div className="absolute left-0 w-[100%]">
              <Footer />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TeamPage;
