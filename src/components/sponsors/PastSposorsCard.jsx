
import React from 'react'

const PastSposorsCard = ({ sponsorName, logosrc }) => {
    return (
        <div>
            <div className='flex flex-row gap-2 rounded-lg mr-10 xl:bg-slate-600 w-full md:w-fit'>
                <img src={`/${logosrc}.png`} alt="" className='h-8 md:h-12 rounded-lg' />
                <p className='text-white text-sm md:text-lg font-semibold text-center mt-2 pr-4'>{sponsorName}</p>
            </div>
        </div>
    )
}

export default PastSposorsCard