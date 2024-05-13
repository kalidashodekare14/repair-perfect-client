import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

import { Autoplay, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            <Swiper

                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='team2 bg-no-repeat bg-center bg-cover lg:w-full lg:min-h-screen'>
                        <div className='space-y-3 text-white flex flex-col justify-center lg:mx-32 mx-3 min-h-screen lg:text-left'>
                            <h1 className='lg:text-7xl text-6xl font-[600] text-yellow-400'>Professional</h1>
                            <h2 className='text-4xl'>Home Repair</h2>
                            <p className='lg:w-[60%] text-[#ffffffaf] font-montserrat'>Professional home repair services offer expert solutions for all your maintenance needs, ensuring quality workmanship and peace of mind for homeowners. From minor fixes to major renovations, trust skilled professionals to enhance your home's functionality and aesthetics efficiently.</p>
                            <div>
                                <button className='w-32 btn text-white hover:bg-yellow-500 hover:bg-opacity-100 bg-opacity-0 border-yellow-500'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='team bg-no-repeat bg-center bg-cover w-full min-h-screen'>
                        <div className='space-y-3 text-white flex flex-col justify-center lg:mx-32 mx-3 min-h-screen lg:text-left'>
                            <h1 className='lg:text-7xl text-5xl font-[600] text-yellow-400'>Team Discust</h1>
                            <h2 className='text-4xl'>Home Repair</h2>
                            <p className='lg:w-[60%] text-[#ffffffaf] font-montserrat'>A home repair team, composed of skilled professionals, collaborates seamlessly to efficiently address maintenance and renovation needs, prioritizing quality workmanship and customer satisfaction. Their expertise spans various trades, ensuring comprehensive solutions for homeowners' repair projects.</p>
                            <div>
                                <button className='w-32 btn text-white hover:bg-yellow-500 hover:bg-opacity-100 bg-opacity-0 border-yellow-500'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='team1 bg-no-repeat bg-center bg-cover w-full min-h-screen'>
                        <div className='space-y-3 text-white flex flex-col justify-center lg:mx-32 mx-3 min-h-screen lg:text-left'>
                            <h1 className='lg:text-7xl text-5xl font-[600] text-yellow-400'>Work with skill</h1>
                            <h2 className='text-4xl'>Home Repair</h2>
                            <p className='lg:w-[60%] text-[#ffffffaf] font-montserrat'>Work with skill encapsulates the proficiency and expertise exhibited while executing tasks or activities, ensuring efficient and effective results. It embodies precision, competence, and a commitment to excellence in accomplishing objectives.</p>
                            <div>
                                <button className='w-32 btn text-white hover:bg-yellow-500 hover:bg-opacity-100 bg-opacity-0 border-yellow-500'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;