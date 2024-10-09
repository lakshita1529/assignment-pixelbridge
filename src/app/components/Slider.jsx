'use client';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

// Array of image sources
const images = [
  "/assets/s-i-1.png",
  "/assets/s-i-2.png",
  "/assets/s-i-3.png",
  "/assets/s-i-4.png",
  "/assets/s-i-5.png",
  "/assets/s-i-6.png",
  "/assets/s-i-7.png",
];

export default function App() {
  return (
    <div className='w-[60%] mx-auto my-10 '>
      <div className='flex items-center justify-center font-extrabold text-2xl gap-5 font-Monts py-6 cursor-pointer'>
        <h3>All</h3>
        <h3 className='text-[#FFA800]'>PHOTOS</h3>
        <h3>VIDEOS</h3>
      </div>
      <div className='relative'>
        <div className="swiper-button-prev-custom absolute -left-20 z-10 top-[50%] transform -translate-y-1/2 cursor-pointer w-12 h-16 bg-[url('/assets/leftarrow.png')] bg-cover"></div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode, Pagination, Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-[100vw] sm:w-[60vw] md:w-[40vw] lg:w-[20vw] h-[60vw] sm:h-[60vw] md:h-[40vw] lg:h-[20vw] rounded-2xl bg-[#A6A6A6] p-3"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-next-custom absolute -right-20 z-10 top-[50%] transform -translate-y-1/2 cursor-pointer w-12 h-16 bg-[url('/assets/rightarrow.png')] bg-cover"></div>
      </div>
    </div>
  );
}
