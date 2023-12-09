
import React from 'react'
import { FaLinkedin,FaInstagramSquare } from "react-icons/fa"; 
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";  

function Footer() {
    return (
        <div className='bg-black w-screen'>

            <hr className='w-[100%] md:-ml-[8%] pb-3' />
            
            <div className='grid grid-cols-2 md:grid-cols-4 font-fairdisplay mr-[10%]'>
                
                <div className='mt-[4%]'>
                    <h1 className='font-fairdisplay white font-bold mb-3 text-2xl md:text-6xl'>AVINYA</h1>
                    <h2 className='font-semibold text-slate-200 text-center'> Tag Line Goes here Tagline...</h2>
                </div>

                <div className='mt-[16%]'>
                    <h2 className='text-2xl font-fairdisplay white font-bold mb-3'>Follow Us On Social Media</h2>
                    
                    <div className='flex flex-row gap-2 items-center mx-[18%] mt-7'>

                        <a href="/">
                            <FaLinkedin className='text-3xl text-blue-400'/>
                        </a>
                        <a href='/'>
                            <a href=""></a>
                            <FaInstagramSquare className='text-3xl text-pink-300'/>
                        </a>
                        <a href='/'>
                            <FaSquareXTwitter className='text-3xl text-white'/>
                        </a>
                        <a href='/'>
                            <FaFacebookSquare className='text-3xl text-blue-900'/>
                        </a>
                    </div>
                </div>

                <div className='mt-[16%]'>
                    <h2 className='text-2xl font-fairdisplay white font-bold
                     mb-3'>EMail</h2>
                    <h2 className='font-semibold text-slate-200'> avinya@gmail.com </h2>
                </div>

                <div className='mt-[16%]'>
                    <h2 className='text-2xl font-fairdisplay white font-bold
                     mb-3'>Address</h2>
                    <h2 className='font-semibold text-slate-200'> NSUT, Dwarka, Sector-3</h2>
                </div>


            </div>
        </div>
    )
}

export default Footer