import React from 'react';
import about from '../../assets/about.jpg'
import img from '../../assets/tm.png'
import img1 from '../../assets/tm1.jpeg'
import img2 from '../../assets/tm2.jpg'
import img3 from '../../assets/tm3.jpg'

import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <div className=''>
                <div>
                    <div className='bg-fixed cover bg-no-repeat bg-cover bg-center h-[60vh]'>
                        <div className='flex flex-col items-center justify-center space-y-5 h-[60vh]'>
                            <h1 className='text-6xl uppercase text-yellow-500'>Contect</h1>
                        </div>
                    </div>
                </div>
                <div className='min-h-screen flex justify-center items-center'>
                    <div className='flex flex-col lg:flex-row justify-center items-center space-x-10'>
                        <img className='lg:w-[40%]' src={about} alt="" />
                        <div className='lg:w-[40%] space-y-3'>
                            <h1 className='text-4xl font-[800] font-montserrat'>A few words about us</h1>
                            <p className='leading-[25px] font-montserrat font-bold text-[#000000b5]'>Home Repair Solutions offers expert home repair and improvement services, including electrical, plumbing, carpentry, painting, roofing, and general maintenance. Our skilled team ensures top-quality workmanship and exceptional customer service. We provide transparent pricing, are fully licensed and insured, and prioritize your satisfaction. Contact us today to enhance your home's safety, functionality, and beauty.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-4xl text-center font-[500] my-10'>Out Team</h1>
                    <div className='mx-5 lg:mx-32 mb-10 flex flex-col lg:flex-row justify-center lg:space-x-10 items-center'>
                        <div className='w-full'>
                            <img className='lg:w-[15rem] w-full h-[30vh]' src={img} alt="" />
                            <h1 className='text-[20px] font-[600] font-montserrat'>Warren S. Diaz</h1>
                            <p className=''>Flooring Installation</p>
                        </div>
                        <div className='w-full'>
                            <img className='lg:w-[15rem] w-full h-[30vh]' src={img1} alt="" />
                            <h1 className='text-[20px] font-[600] font-montserrat'>David P. Wright</h1>
                            <p>HVAC Repair</p>
                        </div>
                        <div className='w-full'>
                            <img className='lg:w-[15rem] w-full h-[30vh]' src={img2} alt="" />
                            <h1 className='text-[20px] font-[600] font-montserrat'>David R. Burger</h1>
                            <p>Window Replacement</p>
                        </div>
                        <div className='w-full'>
                            <img className='lg:w-[15rem] w-full h-[30vh]' src={img3} alt="" />
                            <h1 className='text-[20px] font-[600] font-montserrat'>Mitchell M. Stein</h1>
                            <p>Fencing Installation</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center my-20'>
                        <a href="#">
                            <button className='btn bg-black text-white'>View All Team Member</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;