// // Modal.js
// import React from 'react';
// import './stylesModal.css'
// import { IoCloseCircleOutline } from "react-icons/io5";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoIosTime } from "react-icons/io"; 
// import calender from '/calender2.jpg';
 

// const Modal = ({ isOpen, onClose, eventDetails, poster }) => {

//     const { eventTitle, eventDate, eventTime, eventVenue, eventDesc, eventPoster } = eventDetails;

//     function getFirst40Words(sentence) {
//         // Split the sentence into words
//         const words = sentence.split(/\s+/);

//         // Get the first 40 words
//         const first40Words = words.slice(0, 40).join(' ');

//         return first40Words;
//     }

//     const mobileDescription = getFirst40Words(eventDesc);

//     // const imgSrc = `${"/eventImages/"+ eventPoster + ".jpg"}`;

//     return (
//         isOpen && (
//             <div className="modal-overlay">
//                 <div className="modal-content px-[3%] pb-[3%] mx-[15%]">

//                     <div className='flex flex-row'>

//                         {/* event name */}
//                         <h2 className='text-2xl md:text-4xl text-white pt-3 pb-4
//                          font-bold text-center headerAkira ml-[15%] md:ml-[30%]'>{eventTitle}</h2>

//                         <IoCloseCircleOutline className='ml-[30%] text-4xl cursor-pointer textColorDevcomm'
//                             onClick={onClose} />

//                     </div>

//                     <div className='md:flex md:flex-row w-[100%]'>

//                         <img src = {poster} alt="Event Poster" srcset=""
//                             className='mx-[10%] md:mx-0 w-[80%] md:w-[40%] h-[350px] rounded-sm' />
//                         <div>

//                             <p className='textColorDevcomm py-7 md:px-10 font-medium' id='pcDesc'>{eventDesc}</p>
//                             <p className='text-gray-200 py-7 px-2 md:px-10 text-sm italic font-medium' id='mobileDesc'>{mobileDescription}</p>

//                             <div className='md:flex flex-row detailsLarge'>

//                                 <div className='md:ml-[10%] mt-6 detailsLarge'>
//                                     <IoIosTime className='text-5xl text-white ml-8' />
//                                     <h2 className='text-white text-xl my-3 font-bold'>{eventTime}</h2>
//                                 </div>

//                                 <div className='md:ml-[12%] detailsLarge'>
//                                     <img src={calender} width={80} alt="calender icon"
//                                         className='ml-[25%]' />
//                                     <img className='text-5xl text-black ml-8' />
//                                     <h2 className='text-white text-2xl my-3 font-bold'>{eventDate}</h2>
//                                 </div>


//                                 <div className='md:ml-[6%] mt-6 detailsLarge'>
//                                     <FaLocationDot className='text-5xl items-center text-white ml-[35%]' />
//                                     <h2 className='text-white text-xl my-3 font-bold text-center'>{eventVenue}</h2>
//                                 </div>

//                             </div>

//                             <div className='text-center items-center'>
 
//                                 <div className='items-center detailsSmall'>
//                                     <IoIosTime className='text-5xl text-black mx-[40%]'/>
//                                     <h2 className='text-slate-950 text-2xl my-3 font-bold'>{eventTime}</h2>
//                                 </div>

//                                 <div className='mt-8 detailsSmall'>
//                                     <img src={calender} width={80} alt="calender icon"
//                                         className='mx-[30%]' /> 
//                                     <h2 className='text-slate-950 text-4xl my-3 font-bold'>{eventDate}</h2>
//                                 </div>


//                                 <div className='mt-8 detailsSmall'>
//                                     <FaLocationDot className='text-5xl text-black mx-[40%]' />
//                                     <h2 className='text-slate-950 text-2xl my-3 font-bold'>{eventVenue}</h2>
//                                 </div>

//                             </div>

                            

//                             <button onClick={onClose} className='text-slate-100 bg-slate-900 my-4 sm:mx-[20%]
//                             md:mx-[10%] lg:mx-[30%] px-6 py-3 hover:scale-[102%] transition-all hover:bg-slate-800
//                             hover:text-white text-sm xl:text-xl font-bold shadow-md shadow-gray-400 hover:shadow-stone-200
//                             hover:translate-y-1' id='registerforEventBtn'>Register for {eventTitle}</button>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     );
// };

// export default Modal;

 