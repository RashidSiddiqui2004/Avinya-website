const ImageOverlay = () => {
  return (
    <div className="mt-5 lg:mt-10 team-members-container flex flex-col justify-center items-center">
      <div className="team-member flex justify-center max-w-[350px] h-[350px]">
        <img
          src="/SexyMonke.jpg"
          className="w-[100%] h-[100%] object-cover z-0"
        />
        <div className="bg-cyan-400 w-[15px]"></div>
        <div className="bg-cyan-400 flex flex-col justify-end w-[60px] py-4 px-2">
          <div className="font-extrabold text-2xl text-black -rotate-90 font-['Drummer']">
            SEXYMONKE
            <p className=" text-black font-['LLPixel'] font-normal ml-auto">
              Mascot
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
