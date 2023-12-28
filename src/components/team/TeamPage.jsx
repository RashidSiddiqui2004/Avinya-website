import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/footer";
import Nav from "../navbar/Navbar";
import InitialLoader from "../intialLoader/InitialLoader";
import "./team.css";
import img from "./img1.jpg";
import TeamSection from "./TeamSection";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

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
import ayush from "./por_photos/ayush.jpg";
import rishnak from "./por_photos/Rishnakkumar_por.jpg";


const TeamMember = ({ name, position, imageSrc,instalink,linkedinlink }) => (
  <div className="mt-5 team-members-container flex flex-col p-0 justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
    <div className="team-member flex justify-center p-0">
      {/* Team Member Image */}
      <div className="teamMemberCard">
        <img
          src={imageSrc}
          className="  w-fullNew h-full"
          style={{
            clipPath:
              "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
          }}
        />
        <div className="absolute flex justify-center bottom-10 left-10 mb-0">
          {" "}
          <div className="teamMemberSocialMedia">
            <a
              className="teamMemberLink"
              href={instalink}
              target="_blank" 
              style={{ fontSize: "35px", color: "white" }}
            >
              <AiFillInstagram className="icons" />
            </a>
          </div>
          <div className="teamMemberSocialMedia ml-10">
            <a
              className="teamMemberLink"
              href={linkedinlink}
              target="_blank" 
              style={{ fontSize: "35px", color: "white" }}
            >
              <BsLinkedin className="icons" />
            </a>
          </div>
        </div>
      </div>

      {/* Vertical Line */}
      <div className="bg-cyan-400 p-5"></div>

      {/* Text Overlay */}
      <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-0 px-0 z-20 ">
        <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
          {name}
          <p className="text-black text-2xl font-['LLPixel'] font-normal ">
            {position}
          </p>
        </div>
      </div>
    </div>
  </div>
);

function TeamPage() {
  useEffect(() => {
    new AOS.init({ duration: 5000 });
  }, []);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? (
        <InitialLoader />
      ) : (
        <>
          <div className="content mb-0  lg:mb-10">
            <div className="Banner  ">
              <Nav homeUrl="/" />
            </div>
            <div
              className="flex  justify-center items-center w-screen h-screen bg-cover mb-10 bg-center"
              style={{
                backgroundImage: `url(${img})`,
                overflow: "hidden",
              }}
            >
              <div
                className="p-0"
                style={{
                  textShadow:
                    "0 0 10px rgba(238, 194, 51, 0.8), 0 0 20px rgba(231, 172, 63, 0.801), 0 0 30px rgba(255, 255, 255, 0.8)",
                }}
              >
                <h1 className="text-center w-full font-extrabold font-[drummer] text-7xl lg:text-9xl text-purple-700">
                  OUR TEAM
                </h1>
              </div>
            </div>

            {/*chief convener */}
            <TeamSection title="CHIEF CONVENER" className="sm:text-1xl">
              <TeamMember
                name="SARTHAK"
                position="CHIEF CONVENER"
                imageSrc={sarthak}
              linkedinlink="https://www.linkedin.com/in/sarthak-srivastava-5322a3223/"
              instalink="https://www.instagram.com/sarthak_mew/"
              />
              <TeamMember
                name="AYUSH"
                position="CHIEF CONVENER"
                imageSrc={ayush}
              />
            </TeamSection>

            {/* co-convener */}
            <TeamSection title="CO-CONVENER" className="sm:text-1xl">
              <TeamMember
                name="YASHWANI"
                position="C0 CONVENER"
                imageSrc={yashwani}
                instalink="https://www.instagram.com/the.mystic.lady/"
                linkedinlink="https://www.linkedin.com/in/yashwani-mann-020903203/"
              />
              <TeamMember
                name="DHRUV"
                position="CHIEF CONVENER"
                imageSrc={dhruv_garg}
              />
            </TeamSection>

            {/* mentor */}
            {/* CAN BE   REDUCED AS THE  PROVIDE IMAGE IS  NOT UPTO TI=HE GENERAL SIZE */}

            <TeamSection title={"MENTOR"}>
              <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <div className="teamMemberCard ">
                    <img
                      src={rinav}
                      className=" WHAT w-fullNew h-full "
                      style={{
                        clipPath:
                          "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                      }}
                    />
                    <div className="absolute flex  justify-center bottom-10  left-10   mb-0">
                      {" "}
                      <div className="teamMemberSocialMedia">
                        <a
                          className="teamMemberLink"
                          href="#"
                          style={{ fontSize: "35px", color: "white" }}
                        >
                          <AiFillInstagram className="icons" />
                        </a>
                      </div>
                      <div className="teamMemberSocialMedia ml-10">
                        <a
                          className="teamMemberLink"
                          href="#"
                          style={{ fontSize: "35px", color: "white" }}
                        >
                          <BsLinkedin className="icons" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Vertical Line */}
                  <div className="bg-cyan-400 p-5"></div>

                  {/* Text Overlay */}
                  <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-5 px-0 z-20 ">
                    <div className="font-bold text-3xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
                      RINAV
                      <p className="text-black text-2xl font-['LLPixel'] font-normal ">
                        MENTOR
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
                <div className="team-member flex justify-center p-0 ">
                  {/* Team Member Image */}
                  <div className="teamMemberCard ">
                    <img
                      src={harshit}
                      className=" WHAT w-fullNew h-full "
                      style={{
                        clipPath:
                          "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
                      }}
                    />
                    <div className="absolute flex  justify-center bottom-10  left-10   mb-0">
                      {" "}
                      <div className="teamMemberSocialMedia">
                        <a
                          className="teamMemberLink"
                          href="#"
                          style={{ fontSize: "35px", color: "white" }}
                        >
                          <AiFillInstagram className="icons" />
                        </a>
                      </div>
                      <div className="teamMemberSocialMedia ml-10">
                        <a
                          className="teamMemberLink"
                          href="#"
                          style={{ fontSize: "35px", color: "white" }}
                        >
                          <BsLinkedin className="icons" />
                        </a>
                      </div>
                    </div>
                  </div>

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
            <TeamSection title="GENERAL SECRETARY" className="sm:text-1xl">
              <TeamMember
                name="RAHUL"
                position="GENERAL SECRETARY"
                imageSrc={rahul_sahay}
              />
              <TeamMember
                name="DHRUV"
                position="GENERAL SECRETARY"
                imageSrc={dhruv_deora}
                linkedinlink="https://www.linkedin.com/in/dhruv-deora/"
                instalink="https://www.instagram.com/helicopter_uchiha/"
              />
            </TeamSection>

            {/* EM HEEAD */}
            <TeamSection title="EM HEAD" className="sm:text-1xl">
              <TeamMember name="CHIRAG" position="EM HEAD" imageSrc={chirag} />
              <TeamMember
                name="Atish"
                position="EM HEAD"
                imageSrc={atish_malik}
              />
            </TeamSection>

            {/* PR HEAD */}
            <TeamSection title="PR HEAD" className="sm:text-1xl">
              <TeamMember
                name="RISHNAK"
                position="PR HEAD"
                imageSrc={rishnak}
              />
              <TeamMember 
              name="MANVI" 
              position="PR HEAD" 
              imageSrc={manvi} 
              linkedinlink="https://www.linkedin.com/in/manvi-singh-26412122b/"
              instalink="https://www.instagram.com/manvisingh__55/   "
              />
            </TeamSection>

            {/* TECH HEAD */}
            <TeamSection title="TECH HEAD" className="sm:text-1xl">
              <TeamMember
                name="UTKARSH"
                position="TECH HEAD"
                imageSrc={uttkarsh}
                linkedinlink="https://www.linkedin.com/in/utkarsh-maurya-962a65210/"
                instalink="https://www.instagram.com/utttkarrrsh/"
              />
              <TeamMember
                name="PRIYANSHU"
                position="TECH HEAD"
                imageSrc={priyanshu}
                linkedinlink="https://www.linkedin.com/in/priyanshu-sharma-467971188?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                instalink="https://www.instagram.com/priyanshusharma12201?igsh=MW13MjF6cGZ1c2VtOA=="
              />  
            </TeamSection>

            {/* DESIGN HEAD */}
            <TeamSection title="DESIGN HEAD" className="sm:text-1xl">
              <TeamMember
                name="ARYAN"
                position="DESIGN HEAD"
                imageSrc={aryan_chourey}
              />
            </TeamSection>
            {/* OPERATION HEAD */}
            <TeamSection title="OPERATION HEAD" className="sm:text-1xl">
              <TeamMember
                name="YASH"
                position="OPERATION HEAD"
                imageSrc={yash_chandra}
                linkedinlink="https://www.linkedin.com/in/yash-chandra-4a5918251/"
                instalink="https://www.instagram.com/yash_chandra2914?igsh=ZGNjOWZkYTE3MQ%3D%3D&utm_source=qr"

              />
              <TeamMember
                name="ADIB"
                position="OPERATION HEAD"
                imageSrc={adib_ahmed}
              />
            </TeamSection>
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
