import "./App.css";
import { useState } from "react";
// import Footer2 from './components/footerAlternative/Footer'
import Gallery from "./components/gallery/Gallery";
// import RegistrationPoster from './components/register/RegistrationPoster'
import Sponsors from "./components/sponsors/Sponsors";
import Button from "./components/handles/handles";
import Footer from "./components/footer/footer";
import IntroFunc from "./components/intro/intro";
import WhyPart2 from "./components/why_to_participate/WhyPart";
import Event from "./components/events/Event";

function App() {
  const [cta, setCTA] = useState("Get, Set, CODE & FUN ❤️!");

  function changeCTA() {
    setCTA("Registrations starting soon ❤️");
  }

  return (
    <>
      <h1
        className="text-6xl font-bold font-fairdisplay italic 
      bg-gradient-to-r from-purple-400 via-green-300 to-blue-500 text-transparent
       bg-clip-text underlined-text pb-3 px-1 hover:scale-95 transition-all"
      >
        AVINYA
        <span className="text-red-500 mx-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          2024
        </span>
      </h1>

      <div className="flex flex-row px-[20%] mt-7 mb-9">
        <img src="/programmer.png" alt="image" className="w-[50%] mr-16" />

        <img src="/VR.png" alt="image" className="w-[50%]" />
      </div>

      <IntroFunc />
      <div className="mb-10">
        <Event />
      </div>

      {/* <RegistrationPoster/>  --> to be added later after backend integration*/}
      <WhyPart2 />

      <Gallery />

      {/* Join Button */}

      <Button CTA={"JOIN"} />

      <Sponsors />

      <div className="flex flex-row px-[10%] mt-7 mb-4">
        <img src="/desk.png" alt="image" className="w-[80%] mx-[15%]" />
      </div>

      <div className="mt-6 mb-4">
        <button
          className="text-2xl bg-green-200 hover:bg-green-300 text-slate-950 transition-all
         hover:scale-[102%] hover:text-slate-900"
          onClick={changeCTA}>
          {cta}
        </button>
      </div>

      <Footer />
    </>
  );
}

export default App;
