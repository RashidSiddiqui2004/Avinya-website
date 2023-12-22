import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TeamPageLoader from "../team_page_loader/team_page_loader";
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
            <div className="Banner">
              <Nav />
            </div>
            <h1 className="text-center font-extrabold font-['Drummer'] mt-5 sm:text-5xl lg:text-8xl">
              OUR TEAM
            </h1>
            <div className="section-title chief-convener text-3xl lg:text-5xl text-center mb-5">
              CHIEF CONVENER
            </div>
            <div className="team-members-container">
              <ImageOverlay />
            </div>
            <div className="section-title text-3xl lg:text-5xl text-center mb-5 lg:mb-10">
              TECH STAFF
            </div>
            <div className="team-members-container mb-5">
              <ImageOverlay />
              <ImageOverlay />
              <ImageOverlay />
            </div>

            <div className="section-title text-3xl lg:text-5xl text-center">
              CORE MEMBERS
            </div>
            <div className="team-members-container mb-10">
              <ImageOverlay />
              <ImageOverlay />
              <ImageOverlay />
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
