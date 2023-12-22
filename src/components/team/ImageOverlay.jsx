import img from "./Left.png";

const ImageOverlay = () => {
  return (
    <div className="mt-2 team-members-container flex flex-col justify-center items-center transform hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">      <div className="team-member relative flex justify-center p-0 ">
        {/* First Image (SexyMonke.jpg) */}
        <img
          src="/SexyMonke.jpg"
          className="w-full h-full object-cover rounded-lg"
          style={{
            clipPath:
              "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 14%, 100% 17%, 100% 83%, 97% 86%, 97% 100%, 0% 100%)",
          }}
        />

        {/* Vertical Line */}
        <div className="bg-cyan-400 p-3.5"></div>

        {/* Text Overlay */}
        <div className="bg-cyan-400 flex flex-col justify-end w-[80px] py-2 px-2 z-20 ">
          <div className="font-bold text-4xl text-black transform -rotate-90 -translate-x-5 font-['Drummer']">
            SEXYMONKE
            <p className="text-black text-4xl font-['LLPixel'] font-normal">
              Mascot
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
