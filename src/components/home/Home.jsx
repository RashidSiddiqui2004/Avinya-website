
import React, { Suspense } from "react";
import IntroFunc from "../intro/intro";
import WhyPart from "../why_to_participate/WhyPart"; 
import JoinButton from "../handles/handles";

import Footer from "../footer/footer";
import Event from "../events/Event"; 
import Banner from '../banner/Banner';
import Nav from '../navbar/Navbar';
 
const Sponsors = React.lazy(() => import ("../sponsors/Sponsors"));
const Gallery = React.lazy(() => import ("../gallery/Gallery"));

function Home() {

    return (
        <>
            <div className="Banner" >
                <Nav homeUrl='/' />
                <Banner />

            </div>

            <IntroFunc />

            <div className="mb-10">
                <Event />
            </div>

            <WhyPart />

            <Suspense fallback={<div><h1 className="text-3xl md:text-5xl font-bold headerAkira pt-16 pb-24 px-1 hover:scale-95 transition-all">GALLERY</h1></div>}>
                <Gallery/>
            </Suspense>
           

            <div className="mt-32">
                <JoinButton CTA={"JOIN"} />
            </div>

            <Suspense fallback={<div><h1>Event Partners</h1></div>}>
                <Sponsors/>
            </Suspense>

           <div className="absolute left-0 w-[100%]">
                <Footer/>
            </div>


        </>
    );
}

export default Home;
 