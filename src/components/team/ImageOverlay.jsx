import img from"./Left.png";

const ImageOverlay = () => {
  return (
    <div className="mt-5 lg:mt-10 team-members-container flex flex-col justify-center items-center">
      <div className="team-member relative flex justify-center p-0">
        {/* First Image (SexyMonke.jpg) */}
        <img
  src="/SexyMonke.jpg"
  className="w-full h-full object-cover"
  style={{
    clipPath: 'polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 97% 0%, 97% 16.59%, 100% 20.5%, 100% 71.9%, 97% 76.78%, 97% 100%, 0% 100%)',
    backgroundColor: '#000000',
  }}
/>

        {/* Vertical Line */}
        <div className="bg-cyan-400  p-2"></div>
  
        {/* Text Overlay */}
        <div className="bg-cyan-400 flex flex-col justify-end w-[60px] py-0 px-2 z-20">
          <div className="font-extrabold text-2xl text-black -rotate-90 font-['Drummer']">
            SEXYMONKE
            <p className="text-black font-['LLPixel'] font-normal ml-auto">
              Mascot
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
