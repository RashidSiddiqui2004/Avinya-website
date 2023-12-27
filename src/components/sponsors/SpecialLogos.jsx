
import React from 'react'

const SpecialLogos = ({logosrc }) => {
    return (
        <div>
            <div className='flex flex-row gap-2 rounded-lg mr-10
             xl:bg-slate-600 min-w-sm'>
                <img src={`/sponsors/${logosrc}.png`} alt="sponsor logo"
                 className='rounded-md w-full h-[60px] px-0' />
            </div>
        </div>
    )
}

export default SpecialLogos;