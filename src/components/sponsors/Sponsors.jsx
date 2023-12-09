
import React from 'react'
import './styles.css';

function Sponsors() {
  return (
    <div>
      <h2 className='text-4xl text-center pt-20 text-green-200 
      font-fairdisplay italic font-bold pb-2'>EVENT PARTNERS</h2>

      <hr className='w-[60%] py-1 mx-[20%]' />
      <hr className='w-[80%] mx-[10%]' />

      {/* Platinum Partners */}

      <div className='h-[200px] rounded-full transition-all
       opacity-40 absolute mt-3 hidden md:block lg:-left-32'>
        <img src="public/gift.png" alt="" />
      </div>

      <div className='h-[205px] rounded-full w-[205px] hover:bg-gradient-to-r hover:from-red-300
       hover:via-green-300 hover:to-pink-400 hover:scale-[102%] transition-all opacity-40 absolute 
       mt-64 -right-[29%] hidden md:block md:-right-28
       bg-gradient-to-r from-blue-200 via-green-200 to-purple-300'>
          <h2 className='text-slate-900 text-4xl mt-[30%] font-fairdisplay italic font-bold 
          text-center items-center px-3'>AVINYA</h2>
          <h3 className='text-slate-900 text-4xl font-fairdisplay italic font-bold 
          text-center items-center px-2'>SPONSORS</h3>
          <span className='text-2xl animate-ping transition-all'>❤️</span>
      </div>

  
      <div>
        <h2 className='text-4xl text-center mt-16 mb-5 font-bold font-fairdisplay
        underlined-text2 pb-3 italic space-x-1'>PLATINUM PARTNERS</h2>
        <hr className='w-[40%] py-1 mx-[30%]' />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-14 mt-3 md:mx-96'>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/devfolio.png" alt="" className='h-16 rounded-lg' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>Devfolio</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/polygon.png" alt="" className='h-16 rounded-md' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>polygon</p>
          </div>
        </div>
      </div>

      {/* Education Partners */}

      <div>
        <h2 className='text-4xl text-center mt-14 mb-5 font-bold font-fairdisplay space-x-1
        underlined-text pb-3'>EDUCATION PARTNERS</h2>
        <hr className='w-[60%] py-1 mx-[20%]' />

        <div className='grid grid-cols-1 md:grid-cols-3 gap-14  mx-14 mt-3 md:mx-56'>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-fit'>
            <img src="/devfolio.png" alt="" className='h-16 rounded-lg' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>Devfolio</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-fit'>
            <img src="/polygon.png" alt="" className='h-16 rounded-md' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>polygon</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-8'>Celo</p>
          </div>
        </div>
      </div>

      {/* Gold Partners */}

      <div>
        <h2 className='text-4xl text-center mt-14 mb-5 font-bold font-fairdisplay space-x-1
        underlined-text pb-3'>GOLD PARTNERS</h2>
        <hr className='w-[40%] py-1 mx-[30%]' />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mx-14 mt-3 md:mx-96'>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/devfolio.png" alt="" className='h-16 rounded-lg' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>Devfolio</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/polygon.png" alt="" className='h-16 rounded-md' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>polygon</p>
          </div>
        </div>
      </div> 

       
      <div className='h-[200px] rounded-full transition-all
       opacity-40 absolute mt-6 -right-[29%]
        hidden md:block lg:top-[390%] lg:-right-32'>
        <img src="public/gift.png" alt="" />
      </div>


      {/* Other Sponsors */}

      <div>
        <h2 className='text-4xl text-center mt-14 mb-5 font-bold font-fairdisplay space-x-1
        pb-3 underlined-text'>OTHER SPONSORS</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-center ml-[25%] lg:ml-8'>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/devfolio.png" alt="" className='h-16 rounded-lg' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>Devfolio</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/polygon.png" alt="" className='h-16 rounded-md' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>polygon</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/filecoin.png" alt="" className='h-16 rounded-xl' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>filecoin</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="public/tezos.png" alt="" className='h-16 rounded-md' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-8'>Tezos</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-2xl font-semibold text-center my-4 pr-6'>Celo</p>
          </div>


          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/devfolio.png" alt="" className='h-16 rounded-lg' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>Devfolio</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/polygon.png" alt="" className='h-16 rounded-md' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>polygon</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/filecoin.png" alt="" className='h-16 rounded-xl' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>filecoin</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="public/tezos.png" alt="" className='h-16 rounded-md' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-8'>Tezos</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-2xl font-semibold text-center my-4 pr-6'>Celo</p>
          </div>


          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/devfolio.png" alt="" className='h-16 rounded-lg' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>Devfolio</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/polygon.png" alt="" className='h-16 rounded-md' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>polygon</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/filecoin.png" alt="" className='h-16 rounded-xl' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>filecoin</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="public/tezos.png" alt="" className='h-16 rounded-md' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-8'>Tezos</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-2xl font-semibold text-center my-4 pr-6'>Celo</p>
          </div>

        </div>

      </div>


      {/* Past Sponsors */}

      <div className='py-32'>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 items-center ml-8'>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/devfolio.png" alt="" className='h-12 rounded-lg' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>Devfolio</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/polygon.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-lg font-semibold text-center mt-2 mr-1'>polygon</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/filecoin.png" alt="" className='h-12 rounded-xl' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>filecoin</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="public/tezos.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>Tezos</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-2xl font-semibold text-center my-4 pr-6'>Celo</p>
          </div>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/devfolio.png" alt="" className='h-12 rounded-lg' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>Devfolio</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/polygon.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-lg font-semibold text-center mt-2 mr-1'>polygon</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/filecoin.png" alt="" className='h-12 rounded-xl' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>filecoin</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="public/tezos.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>Tezos</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-2xl font-semibold text-center my-4 pr-6'>Celo</p>
          </div>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/devfolio.png" alt="" className='h-12 rounded-lg' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>Devfolio</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/polygon.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-lg font-semibold text-center mt-2 mr-1'>polygon</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/filecoin.png" alt="" className='h-12 rounded-xl' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>filecoin</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="public/tezos.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>Tezos</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-2xl font-semibold text-center my-4 pr-6'>Celo</p>
          </div>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/devfolio.png" alt="" className='h-12 rounded-lg' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>Devfolio</p>
          </div>


          <h2 className='text-3xl text-center  font-bold font-fairdisplay
        space-x-1 bg-blue-600 px-5 rounded-xl items-center mx-[2%] md:mx-[25%] 
        lg:mx-16 w-[350px] py-6 h-20 col-span-3'>PAST SPONSORS</h2>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/polygon.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-lg font-semibold text-center mt-2 mr-1'>polygon</p>
          </div>


          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/filecoin.png" alt="" className='h-12 rounded-xl' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>filecoin</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="public/tezos.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>Tezos</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-2xl font-semibold text-center my-4 pr-6'>Celo</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="public/tezos.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>Tezos</p>
          </div>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-12 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>Celo</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="public/tezos.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>Tezos</p>
          </div>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-2xl font-semibold text-center my-4 pr-6'>Celo</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="public/tezos.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>Tezos</p>
          </div>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/polygon.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-lg font-semibold text-center mt-2 mr-1'>polygon</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/filecoin.png" alt="" className='h-12 rounded-xl' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>filecoin</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="public/tezos.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>Tezos</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-2xl font-semibold text-center my-4 pr-6'>Celo</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="public/tezos.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>Tezos</p>
          </div>

          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/polygon.png" alt="" className='h-12 rounded-md' />
            <p className='text-white text-lg font-semibold text-center mt-2 mr-1'>polygon</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="/filecoin.png" alt="" className='h-12 rounded-xl' />
            <p className='text-white text-lg font-semibold text-center mt-2 px-2'>filecoin</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Sponsors