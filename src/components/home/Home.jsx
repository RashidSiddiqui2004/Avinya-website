
import React, { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeroSection from "../hero/HeroSection";
import IntroFunc from "../intro/intro";
import WhyPart from "../why_to_participate/WhyPart";
import Gallery from "../gallery/Gallery";
import JoinButton from "../handles/handles";
import Sponsors from "../sponsors/Sponsors";
import Footer from "../footer/footer";
import Event from "../events/Event";
import InitialLoader from "../intialLoader/InitialLoader";
import EventSection from "../eventModal/NewModalSection";
import Banner from '../banner/Banner';
import Nav from '../navbar/Navbar';
import Reg_button from '../Reg_button/Reg_button'
import TeamPage  from "../team/TeamPage";

function Home() {

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

        <>
            {loading ? (
                <InitialLoader />
            ) : (
                <>
                    <div className="Banner" >
                        <Nav />
                        <Banner />
                        <Reg_button />
                    </div>
 
                    <IntroFunc />

                    <div className="mb-10">
                        <Event />
                    </div>

                    <WhyPart />

                    <Gallery />

                    <div className="mt-32">
                        <JoinButton CTA={"JOIN"} />
                    </div>

                    <Sponsors />
                   
                    <Footer />
                    
                </>
            )}
        </>
    );
}

export default Home;

// const [cta, setCTA] = useState("Get, Set, CODE & FUN ❤️!");

// function changeCTA() {
//     setCTA("Registrations starting soon ❤️");
// }

{/* 
    <div className="mt-6 mb-16 items-center ml-[10%] md:ml-[38%]">
        <button
                            className="text-xl md:text-2xl bg-green-200 hover:bg-green-300 text-slate-950 transition-all
                            hover:scale-[102%] hover:text-slate-900 "
                            onClick={changeCTA}>
                            {cta}
        </button>
    </div> */}
