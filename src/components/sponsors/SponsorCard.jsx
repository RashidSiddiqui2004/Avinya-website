
import React from 'react'

function SponsorCard({ sponsorName, logosrc }) {
    return (
        <div>
            {/* flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit */}
            <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 md:w-fit'>
                <img src={`/sponsors/${logosrc}.png`} alt="" className='h-8 md:h-12 rounded-lg' />
                <p className='text-white text-md sm:text-xl font-semibold text-center pt-2 px-2 md:pr-5'>{sponsorName}</p>
            </div>
        </div>
    )
}

export default SponsorCard