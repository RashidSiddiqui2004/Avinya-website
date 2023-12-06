
import React from 'react'

function Sponsors() {
  return (
    <div>
      <h2 className='text-4xl text-center py-12 font-bold font-serif text-green-200'>EVENT PARTNERS</h2>

      {/* Platinum Partners */}

      <div>
        <h2 className='text-4xl text-center mt-4 mb-5 font-bold font-serif space-x-1'>PLATINUM PARTNERS</h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-14 mt-3 md:mx-60'>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="public/devfolio.png" alt="" className='h-16 rounded-lg' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>Devfolio</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="public/polygon.png" alt="" className='h-16 rounded-md' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>polygon</p>
          </div>
        </div>
      </div>

      {/* Education Partners */}

      <div>
        <h2 className='text-4xl text-center mt-14 mb-5 font-bold font-serif space-x-1'>EDUCATION PARTNERS</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-14  mx-14 mt-3 md:mx-28'>
          <div className='flex flex-row gap-2 rounded-lg md:bg-slate-600 w-full'>
            <img src="public/devfolio.png" alt="" className='h-16 rounded-lg' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>Devfolio</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg md:bg-slate-600 w-full'>
            <img src="public/polygon.png" alt="" className='h-16 rounded-md' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>polygon</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg md:bg-slate-600 w-full'>
            <img src="public/celo.png" alt="" className='h-16 rounded-md px-2 py-2 ml-3' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>Celo</p>
          </div>
        </div>
      </div>

      {/* Gold Partners */}

      <div>
        <h2 className='text-4xl text-center mt-14 mb-5 font-bold font-serif space-x-1'>GOLD PARTNERS</h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-14 mt-3 md:mx-60'>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="public/devfolio.png" alt="" className='h-16 rounded-lg' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>Devfolio</p>
          </div>
          <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
            <img src="public/polygon.png" alt="" className='h-16 rounded-md' />
            <p className='text-white text-2xl font-semibold text-center my-4 px-4'>polygon</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Sponsors