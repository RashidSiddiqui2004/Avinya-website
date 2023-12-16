
import React from 'react'
import './styles.css';
import './SponsorsStyles.css'
import SponsorCard from './SponsorCard';
import PastSposorsCard from './PastSposorsCard';

function Sponsors() {

  return (

    <div className=' overflow-hidden overflow-x-hidden'>

      <h2 className='text-2xl sm:text-4xl text-center pt-20 text-white
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
        <h2 className='text-xl sm:text-3xl text-center mt-16 mb-5
        ml-[10%] md:ml-[35%] font-medium
        underlined-text2 pb-3 space-x-1 headerAkira transition-all linearGradientSponsors2'>PLATINUM PARTNERS</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center
         mx-[40%] sm:mx-[45%] mt-3 md:mx-[35%]'>
          <SponsorCard sponsorName="Devfolio" logosrc="devfolio" />
          <SponsorCard sponsorName="polygon" logosrc="polygon" />
        </div>
      </div>

      {/* Education Partners */}

      <div>
        <h2 className='text-xl sm:text-3xl text-center mt-12 mb-5 ml-[10%] md:ml-[35%]
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
        <h2 className='text-xl sm:text-3xl text-center mt-14 mb-5 ml-[18%] md:ml-[38%]
        font-normal headerAkira space-x-1
        underlined-text pb-3 transition-all linearGradientSponsors3'>GOLD PARTNERS</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center
           mx-[40%] sm:mx-[45%] mt-3 md:mx-[38%]'>

          <SponsorCard sponsorName="Devfolio" logosrc="devfolio" />
          <SponsorCard sponsorName="polygon" logosrc="polygon" />


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
        text-xl sm:text-3xl text-center mt-14 mb-5 ml-[15%] md:ml-[36%]
        font-normal headerAkira space-x-1   
        underlined-text pb-3'>OTHER SPONSORS</h2>

        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-8 
        items-center ml-[10%] sm:ml-[20%] md:ml-[18%] lg:ml-16'>

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

          {/* <h2 className='text-lg md:text-3xl text-center font-bold font-fairdisplay
        space-x-1 bg-blue-600 px-5 rounded-xl items-center mx-[2%] md:mx-[35%] 
        lg:mx-16 md:px-5 py-6 h-20 col-span-1 md:col-span-3'>PAST SPONSORS</h2> */}

          <h2 className=' bg-blue-600 headerAkira w-fit -mx-4 md:mx-[37%] px-4 rounded-xl
        lg:mx-16 md:px-5 font-bold font py-6 text-md md:text-2xl items-center md:col-span-3 
         '>PAST SPONSORS</h2>



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