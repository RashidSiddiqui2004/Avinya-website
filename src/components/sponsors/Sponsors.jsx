
import React from 'react'
import './styles.css';
import './SponsorsStyles.css'
import SponsorCard from './SponsorCard';
import PastSposorsCard from './PastSposorsCard';

function Sponsors() {

  const partnerLogos = [
    'https://marketplace.canva.com/EAFYecj_1Sc/1/0/1600w/canva-cream-and-black-simple-elegant-catering-food-logo-2LPev1tJbrg.jpg',
    'https://marketplace.canva.com/EAFXIvlL2Ns/2/0/1600w/canva-brown-and-black-vintage-food-restaurant-logo-YASJJho2Kzw.jpg',
    'data:image/png;base64,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',
    'https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21193955/Pizza-Hut.png',
    'https://marketplace.canva.com/EAFYecj_1Sc/1/0/1600w/canva-cream-and-black-simple-elegant-catering-food-logo-2LPev1tJbrg.jpg',
    'https://marketplace.canva.com/EAFXIvlL2Ns/2/0/1600w/canva-brown-and-black-vintage-food-restaurant-logo-YASJJho2Kzw.jpg',
    'data:image/png;base64,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',
    'https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21193955/Pizza-Hut.png',
  ];

  return (

    <div className=' overflow-hidden overflow-x-hidden'>

      <h2 className='text-6xl sm:text-4xl text-center pt-20 text-white
       pb-2 headerAkira font-bold tracking-wide leading-tight p-8 shadow-md
       linearGradientSposnsors transition-all'
      >EVENT PARTNERS</h2>

      <hr className='w-[60%] py-1 mx-[20%]' />
      <hr className='w-[80%] mx-[10%]' />

      {/* Platinum Partners */}

      <div className='h-[200px] rounded-full transition-all
       opacity-40 absolute mt-3 hidden md:block lg:-left-32'>
        <img src="/gift.png" alt="" />
      </div>

      <div>
        <h2 className='text-5xl sm:text-3xl text-center mt-16 mb-5 ml-[18%] md:ml-[35%] font-medium
        underlined-text2 pb-3 space-x-1 headerAkira transition-all linearGradientSponsors2'>PLATINUM PARTNERS</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center
         mx-[40%] sm:mx-[45%] mt-3 md:mx-[35%]'>
          <SponsorCard sponsorName="Devfolio" logosrc="devfolio" />
          <SponsorCard sponsorName="polygon" logosrc="polygon" />
        </div>
      </div>

      {/* Education Partners */}

      <div>
        <h2 className='text-5xl sm:text-3xl text-center mt-12 mb-5 ml-[20%] md:ml-[35%]
        font-normal headerAkira space-x-1
        underlined-text pb-3'>EDUCATION PARTNERS</h2>
        {/* md:mx-56  mx-[40%]  */}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-14 mx-[40%] mt-3
         sm:mx-[40%] md:mx-[30%]'>
          <SponsorCard sponsorName="Devfolio" logosrc="devfolio" />
          <SponsorCard sponsorName="polygon" logosrc="polygon" />
          <SponsorCard sponsorName="Celo" logosrc="celo" />

          {/* <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-4xl sm:text-2xl font-semibold text-center my-4 px-8'>Celo</p>
          </div> */}

        </div>
      </div>

      {/* Gold Partners */}

      <div>
        <h2 className='text-5xl sm:text-3xl text-center mt-14 mb-5 ml-[25%] md:ml-[38%]
        font-normal headerAkira space-x-1
        underlined-text pb-3 transition-all linearGradientSponsors3'>GOLD PARTNERS</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center
           mx-[40%] sm:mx-[45%] mt-3 md:mx-[38%]'>

          <SponsorCard sponsorName="Devfolio" logosrc="devfolio" />
          <SponsorCard sponsorName="polygon" logosrc="polygon" />

          {/* <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/devfolio.png" alt="" className='h-16 rounded-lg' />
            <p className='text-white text-4xl sm:text-2xl font-semibold text-center my-4 px-4'>Devfolio</p>
          </div> 
           */}

        </div>

        {/* <div className='h-[200px] rounded-full transition-all
       opacity-40 absolute mt-6 -right-[29%]
        hidden md:block lg:-right-0'>
          <img src="/gift.png" alt="" />
        </div> */}
      </div>


      {/* Other Sponsors */}

      <div>
        <h2 className='
        text-5xl sm:text-3xl text-center mt-14 mb-5 ml-[25%] md:ml-[36%]
        font-normal headerAkira space-x-1   
        underlined-text pb-3'>OTHER SPONSORS</h2>

        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-8 
        items-center ml-[22%] sm:ml-[20%] md:ml-[18%] lg:ml-16'>

          <SponsorCard sponsorName="Devfolio" logosrc="devfolio" />
          <SponsorCard sponsorName="polygon" logosrc="polygon" />
          <SponsorCard sponsorName="filecoin" logosrc="filecoin" />
          <SponsorCard sponsorName="Tezos" logosrc="tezos" />
          <SponsorCard sponsorName="Celo" logosrc="celo" />


          <SponsorCard sponsorName="Devfolio" logosrc="devfolio" />
          <SponsorCard sponsorName="polygon" logosrc="polygon" />
          <SponsorCard sponsorName="filecoin" logosrc="filecoin" />
          <SponsorCard sponsorName="Tezos" logosrc="tezos" />
          <SponsorCard sponsorName="Celo" logosrc="celo" />


          <SponsorCard sponsorName="Devfolio" logosrc="devfolio" />
          <SponsorCard sponsorName="polygon" logosrc="polygon" />
          <SponsorCard sponsorName="filecoin" logosrc="filecoin" />
          <SponsorCard sponsorName="Tezos" logosrc="tezos" />
          <SponsorCard sponsorName="Celo" logosrc="celo" />

        </div>

      </div>

      {/* <div className='flex flex-row gap-7 items-start mb-6'>
        {partnerLogos.map((logo, index) => (
          <div key={index} className={`mx-4 logo-animation float-from-left`}>
            <img src={logo} alt={`Partner Logo ${index}`} className="mx-auto w-18 h-20" />
          </div>
        ))}
      </div> */}

      {/* Past Sponsors */}

      <div className='pt-32'>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 
        items-center ml-[15%] sm:ml-[20%] md:ml-[18%] lg:ml-8'>

          <div className='float-from-left  logo-animation'>
            <PastSposorsCard sponsorName="Devfolio" logosrc="devfolio" />
          </div>

          <div className='float-from-left  logo-animation'>
            <PastSposorsCard sponsorName="polygon" logosrc="polygon" />
          </div>

          <div className='float-from-left  logo-animation'>
            <PastSposorsCard sponsorName="filecoin" logosrc="filecoin" />
          </div>

          <div className='float-from-left  logo-animation'>
            <PastSposorsCard sponsorName="Tezos" logosrc="tezos" />
          </div>

          <div className='float-from-left  logo-animation'>
            <PastSposorsCard sponsorName="Celo" logosrc="celo" />
          </div>

          <div className='float-from-left  logo-animation'>
            <PastSposorsCard sponsorName="Devfolio" logosrc="devfolio" />
          </div>

          <div className='float-from-left  logo-animation'>
            <PastSposorsCard sponsorName="polygon" logosrc="polygon" />
          </div>

          <div className='float-from-right  logo-animation'>
            <PastSposorsCard sponsorName="filecoin" logosrc="filecoin" />
          </div>

          <div className='float-from-right  logo-animation'>
            <PastSposorsCard sponsorName="Tezos" logosrc="tezos" />
          </div>

          <div className='float-from-right  logo-animation'>
            <PastSposorsCard sponsorName="Celo" logosrc="celo" />
          </div>

          <div className='float-from-right  logo-animation'>
            <PastSposorsCard sponsorName="Devfolio" logosrc="devfolio" />
          </div>

          <div className='float-from-right  logo-animation'>
            <PastSposorsCard sponsorName="polygon" logosrc="polygon" />
          </div>

          <div className='float-from-right  logo-animation'>
            <PastSposorsCard sponsorName="filecoin" logosrc="filecoin" />
          </div>

          <div className='float-from-right  logo-animation'>
            <PastSposorsCard sponsorName="Tezos" logosrc="tezos" />
          </div>



          {/* <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/devfolio.png" alt="" className='h-12 rounded-lg' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 px-2'>Devfolio</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/polygon.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 mr-1'>polygon</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/filecoin.png" alt="" className='h-12 rounded-xl' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 px-2'>filecoin</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/tezos.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 px-2'>Tezos</p>
          </div> */}

          <div className='float-from-leftNew logo-animation'>
            <PastSposorsCard sponsorName="Devfolio" logosrc="devfolio" />
          </div>

          <div className='float-from-leftNew logo-animation'>
            <PastSposorsCard sponsorName="Tezos" logosrc="tezos" />
          </div>

          <h2 className='text-3xl text-center  font-bold font-fairdisplay
        space-x-1 bg-blue-600 px-5 rounded-xl items-center mx-[25%] md:mx-[35%] 
        lg:mx-16 w-[350px] py-6 h-20 col-span-3'>PAST SPONSORS</h2>

          <div className='float-from-right  logo-animation'>
            <PastSposorsCard sponsorName="Devfolio" logosrc="devfolio" />
          </div>

          <div className='float-from-right  logo-animation'>
            <PastSposorsCard sponsorName="Tezos" logosrc="tezos" />
          </div>



          <div className='float-from-left  logo-animation'>
            <PastSposorsCard sponsorName="Devfolio" logosrc="devfolio" />
          </div>

          <div className='float-from-left  logo-animation'>
            <PastSposorsCard sponsorName="polygon" logosrc="polygon" />
          </div>

          <div className='float-from-left  logo-animation'>
            <PastSposorsCard sponsorName="filecoin" logosrc="filecoin" />
          </div>

          <div className='float-from-left  logo-animation'>
            <PastSposorsCard sponsorName="Tezos" logosrc="tezos" />
          </div>

          <div className='float-from-left  logo-animation'>
            <PastSposorsCard sponsorName="Celo" logosrc="celo" />
          </div>

          <div className='float-from-left  logo-animation'>
            <PastSposorsCard sponsorName="Devfolio" logosrc="devfolio" />
          </div>

          <div className='float-from-left  logo-animation'>
            <PastSposorsCard sponsorName="polygon" logosrc="polygon" />
          </div>

          <div className='float-from-right  logo-animation'>
            <PastSposorsCard sponsorName="filecoin" logosrc="filecoin" />
          </div>

          <div className='float-from-right  logo-animation'>
            <PastSposorsCard sponsorName="Tezos" logosrc="tezos" />
          </div>

          <div className='float-from-right  logo-animation'>
            <PastSposorsCard sponsorName="Celo" logosrc="celo" />
          </div>

          <div className='float-from-right  logo-animation'>
            <PastSposorsCard sponsorName="Devfolio" logosrc="devfolio" />
          </div>

          <div className='float-from-right  logo-animation'>
            <PastSposorsCard sponsorName="polygon" logosrc="polygon" />
          </div>

          <div className='float-from-right  logo-animation'>
            <PastSposorsCard sponsorName="filecoin" logosrc="filecoin" />
          </div>

          <div className='float-from-right  logo-animation'>
            <PastSposorsCard sponsorName="Tezos" logosrc="tezos" />
          </div>



          {/* <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/tezos.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 px-2'>Tezos</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center my-4 pr-6'>Celo</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/tezos.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 px-2'>Tezos</p>
          </div>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-12 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 px-2'>Celo</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/tezos.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 px-2'>Tezos</p>
          </div>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center my-4 pr-6'>Celo</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/tezos.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 px-2'>Tezos</p>
          </div>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/polygon.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 mr-1'>polygon</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/filecoin.png" alt="" className='h-12 rounded-xl' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 px-2'>filecoin</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/tezos.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 px-2'>Tezos</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center my-4 pr-6'>Celo</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/tezos.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 px-2'>Tezos</p>
          </div>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/polygon.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 mr-1'>polygon</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/filecoin.png" alt="" className='h-12 rounded-xl' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 px-2'>filecoin</p>
          </div> */}

        </div>

      </div>

    </div>
  )
}

export default Sponsors