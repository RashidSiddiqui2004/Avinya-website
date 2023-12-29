import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navigation, EffectCoverflow, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.css";

const img1 = "https://res.cloudinary.com/doyheqz2f/image/upload/v1703789392/avinya/img8_gfuafa.jpg";
const img2 = "https://res.cloudinary.com/doyheqz2f/image/upload/v1703789390/avinya/img6_zzarkr.jpg";
const img3 = "https://res.cloudinary.com/doyheqz2f/image/upload/v1703789371/avinya/img1_k2ybjd.jpg";
const img4 = "https://res.cloudinary.com/doyheqz2f/image/upload/v1703789377/avinya/img3_oxqhro.jpg";
const img5 = "https://res.cloudinary.com/doyheqz2f/image/upload/v1703789372/avinya/img2_ltqq6w.jpg";
const img6 = "https://res.cloudinary.com/doyheqz2f/image/upload/v1703789380/avinya/img7_ayi3rf.jpg";
const img7 = "https://res.cloudinary.com/doyheqz2f/image/upload/v1703789379/avinya/img4_v8nfdg.jpg";
const img8 = "https://res.cloudinary.com/doyheqz2f/image/upload/v1703789377/avinya/img3_oxqhro.jpg";
const img9 = "https://res.cloudinary.com/doyheqz2f/image/upload/v1703789375/avinya/img10_zlluui.jpg";
const img10 = "https://res.cloudinary.com/doyheqz2f/image/upload/v1703789374/avinya/img5_kufuib.jpg";
const img11 = "https://res.cloudinary.com/doyheqz2f/image/upload/v1703789373/avinya/img11_ro9qt7.jpg";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="gallery-section mt-10 md:mt-20" data-aos="zoom-in" id="gallery">
      <div className="gallery-header">
        <h1 className="text-3xl md:text-5xl font-bold headerAkira pt-16 pb-24 px-1 hover:scale-95 transition-all">GALLERY</h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
        spaceBetween={40}
        centeredSlides={true}
        slidesPerView={1}
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
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>

        <SwiperSlide>
          <img src={img1} alt="img-1" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img-2" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img-3" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img-4" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="img-5" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="img-6" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="img-7" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="img-8" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="img-10" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} alt="img-11" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="img-1" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img-2" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img-3" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
