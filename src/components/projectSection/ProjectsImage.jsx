import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const projectImages = [
    "/project/project1.jpg",
    "/project/project2.jpg",
    "/project/project3.jpg",
    "/project/project4.jpg",
    "/project/project5.jpg"
];

const ProjectsImage = () => {
  return (
    <div className="flex justify-center items-center ">
      {/* ✅ Apply semi-transparent gradient using RGBA */}
      <div className="relative flex justify-center items-center w-full max-w-[900px] 
        bg-gradient-to-r from-[rgba(0,255,255,0.3)] to-[rgba(255,165,0,0.3)] 
        p-8 rounded-3xl shadow-lg">
        
        {/* ✅ Swiper Component */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}  // ✅ Ensures only one slide is visible at a time
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5
          }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} 
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {projectImages.map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img 
                src={img} 
                alt={`Project ${index + 1}`} 
                className="w-full h-[400px] rounded-2xl object-cover shadow-lg" 
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Corrected positioning of Swiper navigation arrows */}
        <div className="swiper-button-prev absolute left-0 text-gray-600 text-3xl z-10"></div>
        <div className="swiper-button-next absolute right-0 text-gray-600 text-3xl z-10"></div>

        {/* ✅ Swiper Pagination */}
        <div className="swiper-pagination mt-4"></div>
      </div>
    </div>
  );
};

export default ProjectsImage;
