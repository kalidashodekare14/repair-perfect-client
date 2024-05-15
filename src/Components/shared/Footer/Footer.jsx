import React from 'react';
import './Footer.css'
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';
import { IoIosSend, IoIosTimer } from 'react-icons/io';
import logo from '/logof.png'

const Footer = () => {
    return (
        <div className='bg-white'>
            <div>
                <div className='lg:h-1/2 bg-fixed footer bg-no-repeat bg-cover bg-center'>
                    <div className='p-5 lg:px-20 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#000000db] '>
                        <div className='text-white space-y-3'>
                            <img className='w-40' src={logo} alt="" />
                            <h2 className='text-4xl font-montserrat'>Repair Perfect</h2>
                            <p className='leading-[20px] font-montserrat'>From fixing leaky faucets to renovating entire spaces, we provide comprehensive solutions to restore and enhance your home's functionality and aesthetics. </p>
                        </div>
                        <div className='text-white space-y-3 lg:w-[360px]'>
                            <div className='border-yellow-500 border-b-2 pb-3'>
                                <h1 className='text-3xl font-montserrat'>Company Office</h1>
                            </div>
                            <div className='space-y-3'>
                                <p className='flex items-center'>
                                    <CiLocationOn className='mr-2' />
                                    <span>California City, CA 93505</span>
                                </p>
                                <p className='flex items-center'>
                                    <IoCallOutline className='mr-2' />
                                    <span>(102) 6666 8888</span>
                                </p>
                                <p className='flex items-center'>
                                    <CiMail className='mr-2' />
                                    <span>repairperfect@gmail.com</span>
                                </p>
                                <p className='flex items-center'>
                                    <IoIosTimer className='mr-2' />
                                    <span>Mon-Sat: 9:30-20:00</span>
                                </p>
                            </div>
                        </div>
                        <div className='text-white space-y-3'>
                            <div className='border-yellow-500 border-b-2 pb-3'>
                                <h1 className='text-3xl font-montserrat'>News Letter</h1>
                            </div>
                            <p className='leading-[25px]'>Subscribe to our newsletter for exclusive updates on new properties, promotions, and discounts. Stay informed and never miss out on the latest offers!</p>
                            <div className='border flex justify-between items-center'>
                                <input placeholder='Email Here' className='input lg:w-80  rounded-none  text-white bg-opacity-0' type="text" />
                                <div className='bg-yellow-500'>
                                    <a href="#">
                                        <IoIosSend className='text-4xl m-2 cursor-pointer' />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='p-5 bg-black text-center text-white'>
                    <span className='text-[16px] font-montserrat'>
                     &copy; 2022-2023 Home Repair || All Rights Reserved 
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;