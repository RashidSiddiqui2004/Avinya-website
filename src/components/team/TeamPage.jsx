import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/footer";
import Nav from "../navbar/Navbar";
import InitialLoader from "../intialLoader/InitialLoader";
import "./team.css";
import ImageOverlay from "./ImageOverlay";

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
              <Nav />
            </div>
            <h1 className="text-center font-extrabold font-['Drummer'] mt-5 sm:text-5xl lg:text-8xl p-30">
              OUR TEAM
            </h1>
            <div className="py-10">
              <div className="section-title chief-convener text-3xl lg:text-5xl text-center mb-5">
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
