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
import HeroSection from "./components/hero/HeroSection";

function App() {
  const [cta, setCTA] = useState("Get, Set, CODE & FUN ❤️!");

  function changeCTA() {
    setCTA("Registrations starting soon ❤️");
  }

  return (
    <>
 
      <HeroSection/>

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
