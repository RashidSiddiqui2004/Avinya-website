
import React from 'react';
import './styles.css';
import SponsorCard from './SponsorCard';

function SponsDummy() {
    return (
        <div className="slider-div">
            <div class="slider">
                <div class="slide-track">
                    <div class="slide">
                        <img class="sponsors-slider-img" src='/Devfolio.png' alt="" />
                    </div>
                    <div class="slide">
                        <img class="sponsors-slider-img" src='/Devfolio.png' alt="" />
                    </div>
                    <div class="slide">
                        <img class="sponsors-slider-img" src='/Devfolio.png' alt="" />
                    </div>
                    <div class="slide">
                        <img class="sponsors-slider-img" src='/Devfolio.png' alt="" />
                    </div>
                    <div class="slide">
                        <img class="sponsors-slider-img" src='/Devfolio.png' alt="" />
                    </div>
                </div>
                <div class="slide-track">
                    <div class="slide">
                        <SponsorCard sponsorName="Devfolio" logosrc="devfolio" />
                    </div>
                    <div class="slide">
                        <SponsorCard sponsorName="Devfolio" logosrc="devfolio" />
                    </div>
                    <div class="slide">
                        <SponsorCard sponsorName="Devfolio" logosrc="devfolio" />
                    </div>
                    <div class="slide">
                        <SponsorCard sponsorName="Devfolio" logosrc="devfolio" />
                    </div>
                </div>
            </div>
            <div />
        </div>
    )
}

export default SponsDummy