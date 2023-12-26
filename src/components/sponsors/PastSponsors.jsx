import React from 'react'
import PastSposorsCard from './PastSposorsCard'
import './newStyle.css';

const PastSponsors = () => {

    const pastSponsorsRows = [
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
        <div className=' overflow-hidden'>
            <h1 className='text-center text-4xl font-bold'>PastSponsors</h1>

            {/* <div className='mt-20 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8
        items-center ml-[15%] sm:ml-[20%] md:ml-[18%] lg:ml-8 sponsor-container'>
             <div className="logos">

                {pastSponsorsRows.map((item, index) => (
                    (index < 6) ? (
                        <div key={index} className='w-[400px]'>
                            <PastSposorsCard sponsorName={item.sponsor} logosrc={item.logoSource} />
                        </div>
                    ) : ''
                ))}

                </div>
            </div> */}

            <div className="sponsor-container">
                <div className="logos">
                    <img src={`/devfolio.png`} className="logo" alt="Logo 1"/>
                    <img src={`/polygon.png`} alt="Logo 2" className="logo"/>
                    <img src={`/devfolio.png`} className="logo" alt="Logo 1"/>
                    <img src={`/tezos.png`} alt="Logo 2" className="logo"/>
                    <img src={`/filecoin.png`} className="logo" alt="Logo 1"/>
                    <img src={`/polygon.png`} alt="Logo 2" className="logo"/>
                    <img src={`/devfolio.png`} className="logo" alt="Logo 1"/>
                    <img src={`/polygon.png`} alt="Logo 2" className="logo"/>
                </div>
            </div>

        </div>


    )
}

export default PastSponsors