import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-start px-32 banner bg-cover bg-center bg-no-repeat min-h-screen w-full space-y-3'>
                        <h1
                            // data-aos-duration="1000"
                            // data-aos="fade-right"
                            className='text-6xl text-[#348ac8] font-bold'>Professional</h1>
                        <h3 className='text-5xl font-bold text-[yellow]'>Home Repair Services</h3>
                        <p className='text-[16px] text-left w-[47%] pt-3'>Home repair services ensure homes are safe, functional, and well-maintained, providing expert assistance promptly.</p>
                        <button className='btn bg-[#44a1e4] text-white border-none'>View Details</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-start px-32 banner1 bg-cover bg-center bg-no-repeat min-h-screen w-full space-y-3'>
                        <h1 className='text-5xl text-[#189af7] font-bold'>Home Repair Services</h1>
                        <h3 className='text-3xl font-bold text-[yellow]'>The work is done perfectly</h3>
                        <p className='text-[16px] text-left w-[47%] '></p>
                        <button className='btn bg-[#44a1e4] text-white border-none'>View Details</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-start px-32 banner2 bg-cover bg-center bg-no-repeat min-h-screen w-full space-y-3'>
                        <h1 className='text-5xl text-[#189af7] font-bold'>Home Repair</h1>
                        <h3 className='text-3xl font-bold text-[yellow]'>Work is done efficiently</h3>
                        <p className='text-[16px] text-left w-[47%] '></p>
                        <button className='btn bg-[#44a1e4] text-white border-none'>View Details</button>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;