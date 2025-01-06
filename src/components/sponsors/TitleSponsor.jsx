
import React from 'react'

const TitleSponsor = ({logosrc,logoName}) => {
    return (
        <div>
            <div className={`flex flex-row gap-2 rounded-lg mr-12 
             min-w-md`}> 
                 <img src={logosrc} alt={`${logoName}` + " LOGO"}
                 className='rounded-md w-full h-[60px] md:h-[80px] px-0' />
            </div>
        </div>
    )
}

export default TitleSponsor;