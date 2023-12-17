// Modal.js
import React from 'react';
import './stylesModal.css'
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { FaCalendarTimes } from "react-icons/fa";
import calender from './eventImages/calender2.jpg';

import imgTest from "./eventImages/event1.jpg"

const Modal = ({ isOpen, onClose, eventDetails }) => {

    const { eventTitle, eventDate, eventTime, eventVenue, eventDesc, eventPoster } = eventDetails;

    function getFirst40Words(sentence) {
        // Split the sentence into words
        const words = sentence.split(/\s+/);

        // Get the first 40 words
        const first40Words = words.slice(0, 40).join(' ');

        return first40Words;
    }

    const mobileDescription = getFirst40Words(eventDesc);

    return (
        isOpen && (
            <div className="modal-overlay">
                <div className="modal-content px-[3%] pb-[3%] mx-[15%]">

                    <div className='flex flex-row'>

                        {/* event name */}
                        <h2 className='text-2xl md:text-4xl text-slate-800 pt-3 pb-4
                         font-bold text-center headerAkira ml-[15%] md:ml-[30%]'>{eventTitle}</h2>

                        <IoCloseCircleOutline className='ml-[30%] text-4xl cursor-pointer text-slate-900'
                            onClick={onClose} />

                    </div>

                    <div className='md:flex md:flex-row w-[100%]'>

                        <img src={imgTest} alt="" srcset=""
                            className='mx-[10%] md:mx-0 w-[80%] md:w-[40%] h-[350px] rounded-sm' />
                            
                        <div>

                            <p className='text-gray-900 py-7 md:px-10 font-medium' id='pcDesc'>{eventDesc}</p>
                            <p className='text-gray-900 py-7 px-2 md:px-10 text-sm italic font-medium' id='mobileDesc'>{mobileDescription}</p>

                            <div className='md:flex flex-row detailsLarge'>

                                <div className='md:ml-[12%] mt-6 detailsLarge'>
                                    <IoIosTime className='text-5xl text-black ml-8' />
                                    <h2 className='text-slate-950 text-2xl my-3 font-bold'>{eventTime}</h2>
                                </div>

                                <div className='md:ml-[8%] detailsLarge'>
                                    <img src={calender} width={80} alt="calender icon"
                                        className='ml-[25%]' />
                                    <img className='text-5xl text-black ml-8' />
                                    <h2 className='text-slate-950 text-4xl my-3 font-bold'>{eventDate}</h2>
                                </div>


                                <div className='md:ml-[8%] mt-6 detailsLarge'>
                                    <FaLocationDot className='text-5xl text-black ml-8' />
                                    <h2 className='text-slate-950 text-2xl my-3 font-bold'>{eventVenue}</h2>
                                </div>

                            </div>

                            <div className='text-center items-center'>
 
                                <div className='items-center detailsSmall'>
                                    <IoIosTime className='text-5xl text-black mx-[40%]'/>
                                    <h2 className='text-slate-950 text-2xl my-3 font-bold'>{eventTime}</h2>
                                </div>

                                <div className='mt-8 detailsSmall'>
                                    <img src={calender} width={80} alt="calender icon"
                                        className='mx-[30%]' /> 
                                    <h2 className='text-slate-950 text-4xl my-3 font-bold'>{eventDate}</h2>
                                </div>


                                <div className='mt-8 detailsSmall'>
                                    <FaLocationDot className='text-5xl text-black mx-[40%]' />
                                    <h2 className='text-slate-950 text-2xl my-3 font-bold'>{eventVenue}</h2>
                                </div>

                            </div>

                            

                            <button onClick={onClose} className='text-white bg-slate-950 my-4 sm:mx-[20%]
                            md:mx-[10%] lg:mx-[30%] px-6 py-3 hover:scale-[102%] transition-all hover:bg-slate-800
                            hover:text-slate-100 text-xl font-bold shadow-md shadow-teal-400'>Register for {eventTitle}</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Modal;
