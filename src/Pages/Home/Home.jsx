import React, { useEffect, useState } from 'react';
import Slider from './Slider/Slider';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import CountUp from 'react-countup';
import install from '../../assets/instalation.jpg';
import repair from '../../assets/homeRepair.jpg';
import painting from '../../assets/painting.jpg'

import './Home.css'

const Home = () => {

    const [popular, setPopular] = useState([])
    const [allView, setAllView] = useState(4)

    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(res => {
                console.log(res.data)
                setPopular(res.data)
            })
    }, [])



    return (
        <div>
            <Helmet>
                <title>Home || Repair Perfect</title>
            </Helmet>
            <Slider></Slider>
            <div className='my-24'>
                <h1 className='text-4xl text-center font-poetsen'>Popular Services</h1>
                <div className='lg:mx-40 mx-5 grid grid-cols-1 md:grid-cols-2 gap-5 my-20'>
                    {
                        popular.slice(0, allView).map(card => (
                            <div className="card  bg-base-100 shadow-xl">
                                <figure><img className='w-full h-[50vh]' src={card.photoUrl} alt="Shoes" /></figure>
                                <div className="p-5 space-y-5">
                                    <div className='flex justify-between items-center'>
                                        <h2 className="text-3xl font-poetsen">{card.service_name}</h2>
                                        <span className='text-[18px] font-poetsen'>{card.price}</span>
                                    </div>
                                    <p className='font-[500] text-slate-500'>{card.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div className='flex items-center border px-3 py-1 rounded'>
                                            <div tabIndex={0} role="button" className=" btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    <img alt="Tailwind CSS Navbar component" src={card.providerImage} />
                                                </div>
                                            </div>
                                            <div>
                                                <h1>{card.ProviderName}</h1>
                                            </div>
                                        </div>
                                        <Link to={`/details/${card._id}`}>
                                            <button className='btn border-blue-500 hover:text-white hover:bg-blue-500 bg-opacity-0'>View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-center pb-10'>
                    <button onClick={() => setAllView(6)} className='btn border-blue-500 hover:text-white hover:bg-blue-500 bg-opacity-0'>Show All</button>
                </div>
            </div>
            <div className='count bg-no-repeat bg-cover bg-center bg-black lg:rounded-full rounded-3xl   lg:w-2/3 m-auto my-20 '>
                <div className='text-white bg-gradient-to-r from-[#24a6d9bb] to-[#a63b33ab] rounded-3xl lg:rounded-full p-10 lg:space-x-10  flex flex-col lg:flex-row justify-center items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-3xl font-montserrat font-extrabold'>
                            <CountUp
                                start={0}
                                end={30}
                                duration={2.75}
                            />
                        </span>
                        <span className='text-[16px] font-montserrat font-bold'>Years of Experience</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-3xl font-montserrat font-extrabold'>
                            <CountUp
                                start={0}
                                end={40}
                                duration={2.75}
                            />
                        </span>
                        <span className='text-[16px] font-montserrat font-bold'>Company Established</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-3xl font-montserrat font-extrabold'>
                            <CountUp
                                start={0}
                                end={100}
                                duration={2.75}
                            />
                        </span>
                        <span className='text-[16px] font-montserrat font-bold'>Projects Completed</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-3xl font-montserrat font-extrabold'>
                            <CountUp
                                start={0}
                                end={5000}
                                duration={2.75}
                            />
                        </span>
                        <span className='text-[16px] font-montserrat font-bold'>Happy Clients</span>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-center space-y-3 my-20'>
                    <h3 className='text-xl text-red-500'>Home Repair Services</h3>
                    <h1 className='text-5xl font-bold text-blue-800'>Our Services</h1>
                    <p className='font-montserrat font-bold'>Proficient repairs for plumbing, electrical, HVAC, and carpentry. Quality service for your home's needs.</p>
                </div>
                <div className='flex justify-center items-center space-x-3 my-20'>
                    <div>
                        <img className='w-80' src={install} alt="" />
                    </div>
                    <div>
                        <img className='w-80' src={repair} alt="" />
                    </div>
                    <div>
                        <img className='w-80' src={painting} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;