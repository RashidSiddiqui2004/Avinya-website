
import React from 'react'

function SponsorCard({ sponsorName, logosrc }) {
    return (
        <div>
            <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
                <img src={`/${logosrc}.png`} alt="" className='h-16 md:h-12 rounded-lg' />
                <p className='text-white text-3xl sm:text-xl font-semibold text-center pt-2 px-2'>{sponsorName}</p>
            </div>
        </div>
    )
}

export default SponsorCard