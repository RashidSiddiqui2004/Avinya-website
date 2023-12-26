// TeamPage.js

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/footer";
import Nav from "../navbar/Navbar";
import InitialLoader from "../intialLoader/InitialLoader";
import "./team.css";
import ImageOverlay from "./ImageOverlay";
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
import  uttkarsh  from "./por_photos/Utkarsh_Maurya.jpg";
import aryan_chourey from "./por_photos/Aryan Chourey.jpg";
import yash_chandra  from "./por_photos/Yash_Chandra.png";
import adib_ahmed from "./por_photos/Adib_Ahmed_Siddiqui.jpeg";
function TeamPage() {
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

            {/* First Team Section */}
            <TeamSection title="CHIEF CONVENER">
              <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px] ">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src={sarthak}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-0 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      Sarthak
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        chief Convener
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src="/SexyMonke.jpg"
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-0 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      Ayush
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        chief Convener
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TeamSection>
            {/* co-convener */}
            <TeamSection title={"CO-CONVENER"}>
              <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src={yashwani}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-0 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      YASHWANI
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        CO Convener
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src={dhruv_garg}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-0 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      DHRUV
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        CO Convener
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TeamSection>

            {/* mentor */}

            <TeamSection title={"MENTOR"}>
              <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src={rinav}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-5 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      RINAV
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        MENTOr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src={harshit}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-5 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      HARSHIT
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        MENTOR
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TeamSection>
            {/* GENERAL SECERATARY  */}
            <TeamSection title={"GENERAL SECRETARY"}>
            <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src={rahul_sahay}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-5 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      RAHUL
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        GENSEC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src={dhruv_deora}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-5 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      DHRUV
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        GENSEC
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </TeamSection>

            <TeamSection title={"EM HEAD"}>
            <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src={chirag}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-5 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      RAHUL
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        EMHEAD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src={atish_malik}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-5 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      DHRUV
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        EMHEAD
                      </p>
                    </div>
                  </div>
                </div>
              </div>


            </TeamSection>

            <TeamSection title ={"PR HEAD"}>
            <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src="/SexyMonke.jpg"
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-5 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      RISHNAK
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        PRHEAD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src={manvi}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-5 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      MANVI
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        PRHEAD
                      </p>
                    </div>
                  </div>
                </div>
              </div>


            </TeamSection>

            <TeamSection title={"TECH HEAD"}>
            <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src={uttkarsh}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-5 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      UTTKARSH
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        TECHHEAD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src={priyanshu}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-5 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      PRIYANSHU
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        TECHHEAD
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              
            </TeamSection>
            <TeamSection title={"DESIGN HEAD"}>
            <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src={aryan_chourey}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-5 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      ARYAN
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        DESIGN HEAD
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </TeamSection>
            <TeamSection title={"OPERATION HEAD"}>
            <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src={yash_chandra}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-5 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      YASH
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        OPERATION HEAD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <img
                    src={adib_ahmed}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                    }}
                  />

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-5 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      ADIB
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        OPERATIONHEAD
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              
            </TeamSection>




            {/* Repeat for other Team Sections */}
          </div>

          <div className="absolute left-0 w-[100%]">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default TeamPage;
