
import React from 'react'
import './styles.css';
import SponsorCard from './SponsorCard';

function Sponsors() {
  return (
    <div>
      <h2 className='text-6xl sm:text-4xl text-center pt-20 text-white
       pb-2 headerAkira font-bold tracking-wide leading-tight p-8 shadow-md'
      >EVENT PARTNERS</h2>

      <hr className='w-[60%] py-1 mx-[20%]' />
      <hr className='w-[80%] mx-[10%]' />

      {/* Platinum Partners */}

      <div className='h-[200px] rounded-full transition-all
       opacity-40 absolute mt-3 hidden md:block lg:-left-32'>
        <img src="/gift.png" alt="" />
      </div>

      <div>
        <h2 className='text-6xl sm:text-4xl text-center mt-16 mb-5 ml-[15%] md:ml-[32%] font-semibold
        underlined-text2 pb-3 space-x-1 headerAkira'>PLATINUM PARTNERS</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center
         mx-[40%] sm:mx-[45%] mt-3 md:mx-[35%]'>
          <SponsorCard sponsorName="Devfolio" logosrc="devfolio" />
          <SponsorCard sponsorName="polygon" logosrc="polygon" />
        </div>
      </div>

      {/* Education Partners */}

      <div>
        <h2 className='text-6xl sm:text-4xl text-center mt-12 mb-5 ml-[14%] md:ml-[30%]
        font-semibold headerAkira space-x-1
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
        <h2 className='text-6xl sm:text-4xl text-center mt-14 mb-5 ml-[20%] md:ml-[35%]
        font-semibold headerAkira space-x-1
        underlined-text pb-3'>GOLD PARTNERS</h2>

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
        <h2 className='text-6xl sm:text-4xl text-center mt-14 mb-16 headerAkira 
        font-semibold space-x-1  ml-[20%] md:ml-[34%]
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


      {/* Past Sponsors */}

      <div className='pt-32'>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 
        items-center ml-[15%] sm:ml-[20%] md:ml-[18%] lg:ml-8'>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
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
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center my-4 pr-6'>Celo</p>
          </div>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
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
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center my-4 pr-6'>Celo</p>
          </div>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
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
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center my-4 pr-6'>Celo</p>
          </div>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/devfolio.png" alt="" className='h-12 rounded-lg' />
            <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 px-2'>Devfolio</p>
          </div>


          <h2 className='text-3xl text-center  font-bold font-fairdisplay
        space-x-1 bg-blue-600 px-5 rounded-xl items-center mx-[25%] md:mx-[35%] 
        lg:mx-16 w-[350px] py-6 h-20 col-span-3'>PAST SPONSORS</h2>

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
          </div>

        </div>

      </div>

    </div>
  )
}

export default Sponsors