
import React from "react";

// Import Swiper React components 
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 

import { Navigation, EffectCoverflow, Pagination, Autoplay, Scrollbar, A11y} from 'swiper/modules';

import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'
import img7 from '../../assets/images/img7.jpg'
import img8 from '../../assets/images/img8.jpg' 
import img10 from '../../assets/images/img10.jpg'
import img11 from '../../assets/images/img11.jpg' 

import "./carousel.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/navigation";

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="gallery-section" data-aos="zoom-in" id="gallery">
      <div className="gallery-header">
        <h1 className="text-5xl font-bold headerAkira pt-16 pb-24
             px-1 hover:scale-95 transition-all">GALLERY</h1>
      </div>

         <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay,EffectCoverflow]}
      spaceBetween={50}
      slidesPerView={1}
      loop= {true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 105,
        modifier: 1,
        slideShadows: true,

      }}
      autoplay={{
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}  
      breakpoints={{
        640: {
          slidesPerView: 2, // Adjust for medium screens
        },
        768: {
          slidesPerView: 3, // Adjust for large screens
        },
      }}
      className="mySwiper"
    >
        <SwiperSlide>
          <img src={img1} alt="img-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img-3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="img-5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="img-6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="img-7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="img-8" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={img9} alt="img-9" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={img10} alt="img-10" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} alt="img-11" />
        </SwiperSlide>

        {/* <SwiperSlide>
          <img src={img12} alt="img-12" />
        </SwiperSlide> */}

        <SwiperSlide>
          <img src={img1} alt="img-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img-2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img3} alt="img-3" />
        </SwiperSlide>

      </Swiper>
    </main>
  );
}


 {/* <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 105,
          modifier: 1,
          slideShadows: true,

        }}
        autoplay={{
          disableOnInteraction: false,
        }}

        // pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="mySwiper"
      > */}




// import React, { useState } from 'react'
// import Card from './Card'
// import '../sponsors/styles.css';

// function Gallery() {

//   const imagesList = [
//     2, 4, 3, 4, 5
//   ];

//   const titles = ['1', '2', '3', '4', '5'];

//   const imageDescriptions = [
//     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repudiandae maxime sit, ut ab commodi. Odio accusantium omnis corrupti! Aperiam ipsa quas nostrum a,repellat nesciunt recusandae iusto accusantium.  mollitia in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime debitis inventore quas architecto repellendus expedita dicta qui. Eos at officia ipsum molestiae ullam nulla, minus voluptate iusto! Mollitia, quisquam et?",
//     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repudiandae maxime sit, ut ab commodi. Odio accusantium omnis corrupti! Aperiam ipsa quas nostrum a,repellat nesciunt recusandae iusto accusantium.  mollitia in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime debitis inventore quas architecto repellendus expedita dicta qui. Eos at officia ipsum molestiae ullam nulla, minus voluptate iusto! Mollitia, quisquam et?",
//     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repudiandae maxime sit, ut ab commodi. Odio accusantium omnis corrupti! Aperiam ipsa quas nostrum a,repellat nesciunt recusandae iusto accusantium.  mollitia in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime debitis inventore quas architecto repellendus expedita dicta qui. Eos at officia ipsum molestiae ullam nulla, minus voluptate iusto! Mollitia, quisquam et?",
//     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repudiandae maxime sit, ut ab commodi. Odio accusantium omnis corrupti! Aperiam ipsa quas nostrum a,repellat nesciunt recusandae iusto accusantium.  mollitia in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime debitis inventore quas architecto repellendus expedita dicta qui. Eos at officia ipsum molestiae ullam nulla, minus voluptate iusto! Mollitia, quisquam et?",
//     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repudiandae maxime sit, ut ab commodi. Odio accusantium omnis corrupti! Aperiam ipsa quas nostrum a,repellat nesciunt recusandae iusto accusantium.  mollitia in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime debitis inventore quas architecto repellendus expedita dicta qui. Eos at officia ipsum molestiae ullam nulla, minus voluptate iusto! Mollitia, quisquam et?"
//   ]

//   const mobileDescriptions = [
//     "Lorem, ipsum dolor sit amet consectetur distinctio ab adipisci dolorum cupiditate  expedita atque culpa rem nostrum, recusandae, officia sed laborum, odit repudiandae magnam nisi sint sapiente soluta.",
//     "Lorem, ipsum dolor sit amet consectetur distinctio ab adipisci dolorum cupiditate  expedita atque culpa rem nostrum, recusandae, officia sed laborum, odit repudiandae magnam nisi sint sapiente soluta.",
//     "Lorem, ipsum dolor sit amet consectetur distinctio ab adipisci dolorum cupiditate  expedita atque culpa rem nostrum, recusandae, officia sed laborum, odit repudiandae magnam nisi sint sapiente soluta.",
//     "Lorem, ipsum dolor sit amet consectetur distinctio ab adipisci dolorum cupiditate  expedita atque culpa rem nostrum, recusandae, officia sed laborum, odit repudiandae magnam nisi sint sapiente soluta.",
//     "Lorem, ipsum dolor sit amet consectetur distinctio ab adipisci dolorum cupiditate  expedita atque culpa rem nostrum, recusandae, officia sed laborum, odit repudiandae magnam nisi sint sapiente soluta.",
//   ]

//   const [imageNumber, setImageNumber] = useState(1);

//   return (
//     <div className='py-8 w-[120%] md:w-[120%] mb-10 mt-[3%] sm:-ml-[10%]'

//     >

//       <div className='flex flex-row mx-[30%] sm:mx-[20%] mb-7'>
//         <img src="/avinyaLogo.png" alt="Avinya Logo" className='rounded-full' />

//         <h1 className='text-5xl md:text-6xl ml-16 md:ml-8 font-bold headerAkira mt-9
//         akira'>AVINYA PAST EVENTS</h1>

//       </div>

//       <Card imageNumber={imageNumber} setImageNumber={setImageNumber} imagesList={imagesList}
//         totalImage={imagesList.length} titles={titles} descriptions={imageDescriptions}
//         mobileDescriptions={mobileDescriptions} />

//       <div className='bg-slate-600 h-[4px] my-5 rounded-se-3xl rounded-bl-none
//       rounded-e-xl rounded-ee-full w-[50%] mx-[25%] md:w-[50%] md:mx-[25%] transition-all'>
//         <div className={`bg-red-600 w-${imageNumber}/5 h-full rounded-xl transition-all`}>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Gallery