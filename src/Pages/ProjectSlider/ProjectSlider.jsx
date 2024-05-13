import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './ProjectSlider.css';
import img from '../../assets/pm.jpg'
import img1 from '../../assets/pm1.jpg'
import img2 from '../../assets/pm2.webp'
import img3 from '../../assets/pm3.jpg'
import img4 from '../../assets/pm4.jpg'

import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';

const ProjectSlider = () => {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                
                modules={[Autoplay, EffectCoverflow, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='rounded-2xl' src={img} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-2xl' src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-2xl' src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-2xl' src={img3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-2xl' src={img4} />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default ProjectSlider;