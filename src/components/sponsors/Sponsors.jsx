
import React from 'react'
import './styles.css';
import './SponsorsStyles.css'
import SponsorCard from './SponsorCard';
import PastSposorsCard from './PastSposorsCard';

function Sponsors() {

  const platinumPartners = [
    {
      sponsor: "Devfolio",
      logoSource: "devfolio"
    },
    {
      sponsor: "polygon",
      logoSource: "polygon"
    },
  ]

  const educationPartners = [
    {
      sponsor: "Devfolio",
      logoSource: "devfolio"
    },
    {
      sponsor: "polygon",
      logoSource: "polygon"
    },
    {
      sponsor: "Celo",
      logoSource: "celo"
    }
  ]

  const goldPartners = [
    {
      sponsor: "Devfolio",
      logoSource: "devfolio"
    },
    {
      sponsor: "polygon",
      logoSource: "polygon"
    },
  ]

  const otherSponsors = [
    {
      sponsor: "Devfolio",
      logoSource: "devfolio"
    },
    {
      sponsor: "polygon",
      logoSource: "polygon"
    },
    {
      sponsor: "filecoin",
      logoSource: "filecoin"
    },
    {
      sponsor: "Tezos",
      logoSource: "tezos"
    },
    {
      sponsor: "Celo",
      logoSource: "celo"
    },
    {
      sponsor: "Devfolio",
      logoSource: "devfolio"
    },
    {
      sponsor: "polygon",
      logoSource: "polygon"
    },
    {
      sponsor: "filecoin",
      logoSource: "filecoin"
    },
    {
      sponsor: "Tezos",
      logoSource: "tezos"
    },
    {
      sponsor: "Celo",
      logoSource: "celo"
    },
    {
      sponsor: "Devfolio",
      logoSource: "devfolio"
    },
    {
      sponsor: "polygon",
      logoSource: "polygon"
    },
    {
      sponsor: "filecoin",
      logoSource: "filecoin"
    },
    {
      sponsor: "Tezos",
      logoSource: "tezos"
    },
    {
      sponsor: "Celo",
      logoSource: "celo"
    },
  ]

  const pastSponsorsRows12 = [
    {
      sponsor: "Devfolio",
      logoSource: "devfolio"
    },
    {
      sponsor: "polygon",
      logoSource: "polygon"
    },
    {
      sponsor: "filecoin",
      logoSource: "filecoin"
    },
    {
      sponsor: "Tezos",
      logoSource: "tezos"
    },
    {
      sponsor: "Celo",
      logoSource: "celo"
    },
    {
      sponsor: "Devfolio",
      logoSource: "devfolio"
    },
    {
      sponsor: "polygon",
      logoSource: "polygon"
    },
    {
      sponsor: "filecoin",
      logoSource: "filecoin"
    },
    {
      sponsor: "Tezos",
      logoSource: "tezos"
    },
    {
      sponsor: "Celo",
      logoSource: "celo"
    },
    {
      sponsor: "Devfolio",
      logoSource: "devfolio"
    },
    {
      sponsor: "polygon",
      logoSource: "polygon"
    },
    // {
    //   sponsor: "filecoin",
    //   logoSource: "filecoin"
    // },
    // {
    //   sponsor: "Tezos",
    //   logoSource: "tezos"
    // },
  ]

  const pastSponsorsRows45 = [
    {
      sponsor: "Devfolio",
      logoSource: "devfolio"
    },
    {
      sponsor: "polygon",
      logoSource: "polygon"
    },
    {
      sponsor: "filecoin",
      logoSource: "filecoin"
    },
    {
      sponsor: "Tezos",
      logoSource: "tezos"
    },
    {
      sponsor: "Celo",
      logoSource: "celo"
    },
    {
      sponsor: "Devfolio",
      logoSource: "devfolio"
    },
    {
      sponsor: "polygon",
      logoSource: "polygon"
    },
    {
      sponsor: "filecoin",
      logoSource: "filecoin"
    },
    {
      sponsor: "Tezos",
      logoSource: "tezos"
    },
    {
      sponsor: "Celo",
      logoSource: "celo"
    },
    {
      sponsor: "Devfolio",
      logoSource: "devfolio"
    },
    {
      sponsor: "polygon",
      logoSource: "polygon"
    },
    // {
    //   sponsor: "filecoin",
    //   logoSource: "filecoin"
    // },
    // {
    //   sponsor: "Tezos",
    //   logoSource: "tezos"
    // },
  ]

  return (

    <div className='overflow-hidden overflow-x-hidden mb-16' id='sponsors'>

      <h2 className='text-2xl sm:text-4xl pt-20 text-white
       pb-2 headerAkira font-bold tracking-wide leading-tight p-8 shadow-md
       linearGradientSposnsors transition-all text-center ml-10'
      >EVENT PARTNERS</h2>

      {/* Platinum Partners */}

      <div>
        <h2 className='text-xl sm:text-3xl text-center mt-16 mb-5
        ml-[12%] md:ml-[30%] xl:ml-[36%] font-medium
        underlined-text2 pb-3 space-x-1 headerAkira transition-all 
        linearGradientSponsors2'>PLATINUM PARTNERS</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center
         mx-[38%] sm:mx-[45%] mt-3 md:mx-[32%]'>

          {platinumPartners.map((item, index) => (
            <SponsorCard key={index} sponsorName={item.sponsor} logosrc={item.logoSource} />
          ))}

        </div>
      </div>


      {/* Education Partners */}

      <div>
        <h2 className='text-xl sm:text-3xl text-center mt-12 mb-5 ml-[12%]
         md:ml-[30%] xl:ml-[35%] font-normal headerAkira space-x-1
        underlined-text pb-3'>EDUCATION PARTNERS</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-14 mx-[38%] mt-3
         sm:mx-[40%] md:mx-[23%]'>

          {educationPartners.map((item, index) => (
            <SponsorCard key={index} sponsorName={item.sponsor} logosrc={item.logoSource} />
          ))}

          {/* <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-4xl sm:text-2xl font-semibold text-center my-4 px-8'>Celo</p>
          </div> */}

        </div>
      </div>

      {/* Gold Partners */}

      <div>
        <h2 className='text-xl sm:text-3xl text-center mt-14 mb-5 ml-[25%]
        md:ml-[25%] lg:ml-[34%] xl:ml-[38%]
        font-normal headerAkira space-x-1
        underlined-text pb-3 transition-all linearGradientSponsors3'>GOLD PARTNERS</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center
           mx-[36%] sm:mx-[45%] mt-3 md:mx-[32%]'>

          {goldPartners.map((item, index) => (
            <SponsorCard key={index} sponsorName={item.sponsor} logosrc={item.logoSource} />
          ))}

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
        text-xl sm:text-3xl text-center mt-14 mb-5 ml-[20%] md:ml-[34%] xl:ml-[38%]
        font-normal headerAkira space-x-1   
        underlined-text pb-3'>OTHER SPONSORS</h2>

        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-8 
        items-center ml-[10%] sm:ml-[20%] md:ml-[18%] lg:ml-20'>

          {otherSponsors.map((item, index) => (
            <SponsorCard key={index} sponsorName={item.sponsor} logosrc={item.logoSource} />
          ))}

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

        <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8
        items-center ml-[15%] sm:ml-[20%] md:ml-[18%] lg:ml-8'>

          {pastSponsorsRows12.map((item, index) => (
            (index < 6) ? (
              <div key={index} className='float-from-left logo-animation'>
                <PastSposorsCard sponsorName={item.sponsor} logosrc={item.logoSource} />
              </div>
            ) : (
              <div key={index} className='float-from-right logo-animation'>
                <PastSposorsCard sponsorName={item.sponsor} logosrc={item.logoSource} />
              </div>
            )
          ))}


          {/* <div className='float-from-leftNew logo-animation hidden md:block z-0'>
            <PastSposorsCard sponsorName="Devfolio" logosrc="devfolio" />
          </div>

          <div className='float-from-leftNew logo-animation  hidden md:block z-0'>
            <PastSposorsCard sponsorName="Tezos" logosrc="tezos" />
          </div> */}

          {/* <h2 className=' bg-blue-600 headerAkira w-fit ml-[10%] md:mx-[37%] px-8
          rounded-xl lg:mx-32 text-center md:px-5 font-bold font py-6 text-md md:text-2xl
         items-center col-span-2 md:col-span-2 
         '>PAST SPONSORS</h2> */}

          <h2 className='bg-blue-600 headerAkira w-fit ml-8 md:ml-[25%] md:my-3 lg:my-1 lg:ml-[30%]
          xl:ml-[35%] rounded-xl lg:mx-32 text-center px-5 md:px-5 lg:px-8 font-bold font py-6
           text-md md:text-2xl items-center col-span-2 md:col-span-2 z-10 lg:absolute
           '>
            PAST SPONSORS
          </h2>

          {/* <div className='float-from-leftNew logo-animation hidden md:block z-0'>
            <PastSposorsCard sponsorName="Devfolio" logosrc="devfolio" />
          </div>

          <div className='float-from-leftNew logo-animation hidden md:block z-0'>
            <PastSposorsCard sponsorName="Tezos" logosrc="tezos" />
          </div> */}

 
            {pastSponsorsRows45.map((item, index) => (
              (index < 6) ? (
                <div key={index} className='float-from-left logo-animation'>
                  <PastSposorsCard sponsorName={item.sponsor} logosrc={item.logoSource} />
                </div>
              ) : (
                <div key={index} className='float-from-right logo-animation'>
                  <PastSposorsCard sponsorName={item.sponsor} logosrc={item.logoSource} />
                </div>
              )
            ))}
          



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