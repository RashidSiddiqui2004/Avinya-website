
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

function Home() {

    useEffect(() => {
        new AOS.init({ duration: 1500 });
    }, []);

    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 5000);
    // }, []);

    // const [cta, setCTA] = useState("Get, Set, CODE & FUN ❤️!");

    // function changeCTA() {
    //     setCTA("Registrations starting soon ❤️");
    // }

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

                    <HeroSection />

                    <IntroFunc />
                    
                    <EventSection/>

                    <div className="mb-10">
                        <Event />
                    </div>

                    <WhyPart />

                    <Gallery />

                    <div className="mt-32">
                        <JoinButton CTA={"JOIN"} />
                    </div>

                    <Sponsors />

                    <div className="flex flex-row px-[10%] mt-20 mb-10">
                        <img src="/desk.png" alt="image" className="w-[80%] mx-[15%]" />
                    </div>

                    <Footer />
                </>
            )}
        </>
    );
}

export default Home;

{/* 
    <div className="mt-6 mb-16 items-center ml-[10%] md:ml-[38%]">
        <button
                            className="text-xl md:text-2xl bg-green-200 hover:bg-green-300 text-slate-950 transition-all
                            hover:scale-[102%] hover:text-slate-900 "
                            onClick={changeCTA}>
                            {cta}
        </button>
    </div> */}