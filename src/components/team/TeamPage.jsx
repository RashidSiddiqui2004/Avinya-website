  
import { light } from "@mui/material/styles/createPalette";
import Footer from "../footer/footer";
import Nav from "../navbar/Navbar";
import "./team.css";  
import TeamSection from "./TeamSection";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { linkClasses } from "@mui/material";



const TeamMember = ({ name, position, imageSrc, instalink, linkedinlink }) => (
  <div className="mt-5 team-members-container flex flex-col p-0 justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out max-w-[475px]">
    <div className="team-member flex justify-center p-0">
      {/* Team Member Image */}
      <div className="teamMemberCard">
        <img
          src={imageSrc}
          alt={name}
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
              style={{ fontSize: "40px", color: "white" }}
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
 
  return (
    <div>

      <>
        <div className="content mb-0  lg:mb-10">
          <div className="Banner  ">
            <Nav homeUrl="/" />
          </div>
          <div
            className="flex  justify-center items-center w-screen h-screen bg-cover mb-10 bg-center"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dk8y96rpu/image/upload/v1703790717/img1_fnim8m.jpg')`,
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
              imageSrc={'https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789796/Sarthak_srivastava_k3j6g1.jpg'}
              linkedinlink="https://www.linkedin.com/in/sarthak-srivastava-5322a3223/"
              instalink="https://www.instagram.com/sarthak_mew/"
            />
            <TeamMember
              name="AYUSH"
              position="CHIEF CONVENER"
              imageSrc={'https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789783/ayush_leoqar.jpg'}
              instalink="#"
              linkedinlink="https://www.linkedin.com/in/ayush-ahlawat-1344aa22b/"
/>
          </TeamSection>

          {/* co-convener */}
          <TeamSection title="CO-CONVENER" className="sm:text-1xl">
            <TeamMember
              name="YASHWANI"
              position="C0 CONVENER"
              imageSrc={'https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789811/yashwani_fwnvq1.jpg'}
              instalink="https://www.instagram.com/the.mystic.lady/"
              linkedinlink="https://www.linkedin.com/in/yashwani-mann-020903203/"
            />
            <TeamMember
              name="DHRUV"
              position="CHIEF CONVENER"
              imageSrc={'https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789795/Dhruv_Garg_l69joa.jpg'}
              instalink="https://www.instagram.com/dhruv_._90?igsh=MmVlMjlkMTBhMg=="
              linkedinlink="https://www.linkedin.com/in/dhruv-garg-66a4b222b/"
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
                    src={'https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789781/Rinav_tavpoj.jpg'}
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
                        href="https://www.instagram.com/rinav_gupta07?igsh=YW1uY2JqYmlsM240"
                        style={{ fontSize: "35px", color: "white" }}
                      >
                        <AiFillInstagram className="icons" />
                      </a>
                    </div>
                    <div className="teamMemberSocialMedia ml-10">
                      <a
                        className="teamMemberLink"
                        href="https://www.linkedin.com/in/rinavgupta"
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
                    src={'https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789791/Harshit_o86udi.png'}
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
                        href="https://www.instagram.com/harshit_mittal01?utm_source=qr&igsh=MTB6MXFqdjdnNG9xYw=="
                        style={{ fontSize: "35px", color: "white" }}
                      >
                        <AiFillInstagram className="icons" />
                      </a>
                    </div>
                    <div className="teamMemberSocialMedia ml-10">
                      <a
                        className="teamMemberLink"
                        href="https://www.linkedin.com/in/harshit-mittal-a29630107/"
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
              imageSrc={'https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789781/Rahul_Sahay_bcuqoy.jpg'}
              linkedinlink="https://www.linkedin.com/in/rahul-sahay-6a83a822a/"
              instalink="https://www.instagram.com/sahay47_rahul/"
            />
            <TeamMember
              name="DHRUV"
              position="GENERAL SECRETARY"
              imageSrc={'https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789802/Dhruv_deora_yxvre8.jpg'}
              linkedinlink="https://www.linkedin.com/in/dhruv-deora/"
              instalink="https://www.instagram.com/helicopter_uchiha/"
            />
          </TeamSection>

          {/* EM HEEAD */}
          <TeamSection title="EM HEAD" className="sm:text-1xl">
            <TeamMember name="CHIRAG" position="EM HEAD" imageSrc={'https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789782/Chirag_hqzp13.jpg'} />
            <TeamMember
              name="Atish"
              position="EM HEAD"
              imageSrc='https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789785/Aatish_malik_por_pic_atoxnx.jpg'
              linkedinlink="https://www.linkedin.com/in/aatish-malik-a4117b21b/"
              instalink="https://www.instagram.com/aatishhhhhhhhh/"
            />
          </TeamSection>

          {/* PR HEAD */}
          <TeamSection title="PR HEAD" className="sm:text-1xl">
            <TeamMember
              name="RISHNAK"
              position="PR HEAD"
              imageSrc={'https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789803/Rishnakkumar_por_yuajhj.jpg'}
              linkedinlink="https://www.linkedin.com/in/rishnak"
              instalink="https://www.instagram.com/rishnak.10?igsh=MTIyZHZpbndjN2p1aw=="
            />
            <TeamMember
              name="MANVI"
              position="PR HEAD"
              imageSrc={'https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789808/Manvi_nefcte.jpg'}
              linkedinlink="https://www.linkedin.com/in/manvi-singh-26412122b/"
              instalink="https://www.instagram.com/manvisingh__55/   "
            />
          </TeamSection>

          {/* TECH HEAD */}
          <TeamSection title="TECH HEAD" className="sm:text-1xl">
            <TeamMember
              name="UTKARSH"
              position="TECH HEAD"
              imageSrc={'https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789810/Utkarsh_Maurya_prvcxm.jpg'}
              linkedinlink="https://www.linkedin.com/in/utkarsh-maurya-962a65210/"
              instalink="https://www.instagram.com/utttkarrrsh/"
            />
            <TeamMember
              name="PRIYANSHU"
              position="TECH HEAD"
              imageSrc={'https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789807/Priyanshu_Sharma_suxfow.jpg'}
              linkedinlink="https://www.linkedin.com/in/priyanshu-sharma-467971188?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              instalink="https://www.instagram.com/priyanshusharma12201?igsh=MW13MjF6cGZ1c2VtOA=="
            />
          </TeamSection>

          {/* DESIGN HEAD */}
          <TeamSection title="DESIGN HEAD" className="sm:text-1xl">
            <TeamMember
              name="ARYAN"
              position="DESIGN HEAD"
              imageSrc={'https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789780/Aryan_Chourey_s17uzv.jpg'}
              linkedinlink="https://www.linkedin.com/in/aryan-chourey/"
              instalink="https://www.instagram.com/aryanchourey4?igsh=MTN3cnlqYjAyMGJlbQ=="
            />
          </TeamSection>
          {/* OPERATION HEAD */}
          <TeamSection title="OPERATION HEAD" className="sm:text-1xl">
            <TeamMember
              name="YASH"
              position="OPERATION HEAD"
              imageSrc={'https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789807/Yash_Chandra_vl1ydl.jpg'}
              linkedinlink="https://www.linkedin.com/in/yash-chandra-4a5918251/"
              instalink="https://www.instagram.com/yash_chandra2914?igsh=ZGNjOWZkYTE3MQ%3D%3D&utm_source=qr"

            />
            <TeamMember
              name="ADIB"
              position="OPERATION HEAD"
              imageSrc={'https://res.cloudinary.com/dk8y96rpu/image/upload/v1703789781/Adib_Ahmed_Siddiqui_p3npod.jpg'}
            />
          </TeamSection>
        </div>

        <div className="absolute left-0 w-[100%]">
          <Footer />
        </div>
      </>

    </div>
  );
}

export default TeamPage;
