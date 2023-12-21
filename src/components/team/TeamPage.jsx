import { useState, useEffect } from "react";
// import AOS from "aos";
import "aos/dist/aos.css";
import TeamPageLoader from "../team_page_loader/team_page_loader";
import Footer from "../footer/footer";
import Nav from "../navbar/Navbar";

import "./team.css";
import ImageOverlay from "./ImageOverlay";

function TeamPage() {
  const [loading, setLoading] = useState(true);

  // Simulating video loading with a useEffect
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      {loading ? (
        <TeamPageLoader />
      ) : (
        <>
          <div className="content">
            <div className="Banner">
              <Nav />
            </div>
            <div>
              <div
                className="absolute top-0 left-0 right-0 bottom-0 flex justify-center text-white font-bold text-2xl"
                style={{
                  fontFamily: "Chakra Petch",
                  marginTop: "5px",
                  display: "flex",
                }}
              >
                <div>
                  <h1
                    style={{
                      background: `linear-gradient(233deg, #64009A, #3B22AA, #B3007D)`,
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      fontFamily: "Chakra Petch",
                      fontWeight: "bold",
                    }}
                  >
                    OUR TEAM
                  </h1>
                </div>
              </div>
            </div>
            <div className="section-title chief-convener text-center">
              CHIEF CONVENER
            </div>
            <ImageOverlay />
            <div className="section-title text-center">TECH STAFF</div>
            <div className="team-members-container">
              <ImageOverlay />
              <ImageOverlay />
              <ImageOverlay />
            </div>

            <div className="section-title text-center">CORE MEMBERS</div>
            <div className="team-members-container">
              <ImageOverlay />
              <ImageOverlay />
              <ImageOverlay />
            </div>
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default TeamPage;
import { useState, useEffect } from "react";
// import AOS from "aos";
import "aos/dist/aos.css";
import TeamPageLoader from "../team_page_loader/team_page_loader";
import Footer from "../footer/footer";
import Nav from "../navbar/Navbar";

import "./team.css";
import ImageOverlay from "./ImageOverlay";

function TeamPage() {
  const [loading, setLoading] = useState(true);

  // Simulating video loading with a useEffect
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      {loading ? (
        <TeamPageLoader />
      ) : (
        <>
          <div className="content">
            <div className="Banner">
              <Nav />
            </div>
            <div>
              <div
                className="absolute top-0 left-0 right-0 bottom-0 flex justify-center text-white font-bold text-2xl"
                style={{
                  fontFamily: "Chakra Petch",
                  marginTop: "5px",
                  display: "flex",
                }}
              >
                <div>
                  <h1
                    style={{
                      background: `linear-gradient(233deg, #64009A, #3B22AA, #B3007D)`,
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      fontFamily: "Chakra Petch",
                      fontWeight: "bold",
                    }}
                  >
                    OUR TEAM
                  </h1>
                </div>
              </div>
            </div>
            <div className="section-title chief-convener text-center">
              CHIEF CONVENER
            </div>
            <ImageOverlay />
            <div className="section-title text-center">TECH STAFF</div>
            <div className="team-members-container">
              <ImageOverlay />
              <ImageOverlay />
              <ImageOverlay />
            </div>

            <div className="section-title text-center">CORE MEMBERS</div>
            <div className="team-members-container">
              <ImageOverlay />
              <ImageOverlay />
              <ImageOverlay />
            </div>
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default TeamPage;
