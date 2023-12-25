import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/footer";
import Nav from "../navbar/Navbar";
import InitialLoader from "../intialLoader/InitialLoader";
import "./team.css";
import ImageOverlay from "./ImageOverlay";
import img from "./img1.jpg";
function TeamPage() {
  useEffect(() => {
    new AOS.init({ duration: 1500 });
  }, []);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
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
              className="flex justify-center items-center h-screen bg-cover bg-center"
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

            <div className="py-10">
              <div className="section-title chief-convener text-3xl lg:text-5xl text-center mb-5 p-10">
                CHIEF CONVENER
              </div>
              <div className="team-members-container py-10">
                <ImageOverlay />
              </div>
            </div>
            <div className="py-10">
              <div className="section-title text-3xl lg:text-5xl text-center mb-5 lg:mb-10">
                TECH STAFF
              </div>
              <div className="team-members-container py-15">
                <div className="flex-container mb-5  ">
                  <ImageOverlay />
                  <ImageOverlay />
                  <ImageOverlay />
                  <ImageOverlay />
                  <ImageOverlay />
                  <ImageOverlay />
                  <ImageOverlay />
                  <ImageOverlay />
                </div>
              </div>
            </div>
            <div className="py-10">
              <div className="section-title text-3xl lg:text-5xl text-center">
                CORE MEMBERS
              </div>
              <div className="team-members-container py-20">
                <div className="flex-container mb-5  ">
                  <ImageOverlay />
                  <ImageOverlay />
                  <ImageOverlay />
                  <ImageOverlay />
                  <ImageOverlay />
                  <ImageOverlay />
                  <ImageOverlay />
                </div>
              </div>
            </div>
            {/* when more  needed  USE THIS DIV*/}
            <div className="section-title text-3xl lg:text-5xl text-center">
              MORE TEAMS
            </div>
            <div className="py-10">
              <div className="team-members-container ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mb-5 p-40  flex flex-wrap justify-center items-center">
                  {/* MORE MEMBERS */}
                </div>
              </div>
            </div>
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
