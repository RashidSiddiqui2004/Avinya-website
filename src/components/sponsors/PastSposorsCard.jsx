
import React from 'react'

const PastSposorsCard = ({ sponsorName, logosrc }) => {
    return (
        <div>
            <div className='flex flex-row gap-2 rounded-lg lg:bg-slate-600 w-full md:w-fit'>
                <img src={`/${logosrc}.png`} alt="" className='h-12 rounded-lg' />
                <p className='text-white text-4xl md:text-lg font-semibold text-center mt-2 px-2'>{sponsorName}</p>
            </div>
        </div>
    )
}

export default PastSposorsCard