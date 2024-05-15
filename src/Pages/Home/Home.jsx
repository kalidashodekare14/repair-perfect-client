import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import CountUp from 'react-countup';
import install from '../../assets/instalation.jpg';
import repair from '../../assets/homeRepair.jpg';
import painting from '../../assets/painting.jpg'
import Window from '../../assets/window.webp'
import hvac from '../../assets/HVAC.webp'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



import './Home.css'
import Slider from '../Slider/Slider';
import ProjectSlider from '../ProjectSlider/ProjectSlider';
import { Hourglass } from 'react-loader-spinner';

const Home = () => {

    const [popular, setPopular] = useState([])
    const [allView, setAllView] = useState(4)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/services`)
            .then(res => {
                // console.log(res.data)
                setPopular(res.data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#306cce', '#72a1ed']}
                />
            </div>
        )

    }


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (
        <div>
            <Helmet>
                <title>Home || Repair Perfect</title>
            </Helmet>
            <Slider></Slider>
            <div className='bg-fixed project bg-no-repeat bg-center bg-cover h-[100vh]'>
                <div className='h-[100vh] bg-gradient-to-r from-[#24a6d9e9] to-[#a63b33da]'>
                    <div className='lg:mx-32 py-10'>
                        <div className='space-y-3 pb-10 '>
                            <p className='text-[20px] text-[#bfb90f] text-center font-semibold'>Awesome Works</p>
                            <h1 className='text-center text-5xl font-montserrat font-[600] text-white'>Our Project</h1>
                        </div>
                        <div className=''>
                            <ProjectSlider></ProjectSlider>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-24'>
                <h1 className='text-4xl text-center font-poetsen'>Popular Services</h1>
                <div className='lg:mx-40 mx-5 grid grid-cols-1 md:grid-cols-2 gap-5 my-20'>
                    {
                        popular.slice(0, allView).map(card => (
                            <div key={card._id} className="card  bg-base-100 shadow-xl">
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
                                                    <img alt="Tailwind CSS Navbar component" src={card.provider.image} />
                                                </div>
                                            </div>
                                            <div>
                                                <h1>{card.provider.name}</h1>
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
                    <button onClick={() => setAllView(6)} className={`btn border-blue-500 hover:text-white hover:bg-blue-500 bg-opacity-0`}>Show All</button>
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
                                useEasing={true}
                                separator=" "
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
            <div className='lg:mx-32'>
                <div className='text-center space-y-3 my-20'>
                    <h3 className='text-xl text-red-500'>Home Repair Services</h3>
                    <h1 className='text-5xl font-bold text-blue-800'>Our Services</h1>
                    <p className='font-montserrat font-bold'>Proficient repairs for plumbing, electrical, HVAC, and carpentry. Quality service for your home's needs.</p>
                </div>
                <div>
                    <Carousel
                        className='space-x-5'
                        responsive={responsive}
                        draggable={false}
                        showDots={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                    >
                        <div className='h-[80vh]'>
                            <div className='mr-5'>
                                <div className=''>
                                    <img className='w-full h-[40vh]' src={install} alt="" />
                                </div>
                                <div className='text-center space-y-3 mt-2'>
                                    <h1 className='text-xl font-montserrat font-[600] '>Installation Services</h1>
                                    <p className='font-montserrat'>
                                        Installation services involve professional setup, assembly, and configuration of products or systems by trained technicians, ensuring safety and efficiency.</p>
                                </div>
                            </div>

                        </div>
                        <div className='h-[80vh]'>
                            <div className='mr-5'>
                                <img className='w-full h-[40vh]' src={repair} alt="" />
                                <div className='text-center space-y-3 mt-2'>
                                    <h1 className='text-xl font-montserrat font-[600] '>Home Repair</h1>
                                    <p className='font-montserrat'>Home repair encompasses the restoration or maintenance of residential properties, addressing issues such as plumbing, electrical, structural, and cosmetic repairs.</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-[80vh]'>
                            <div className='mr-5'>
                                <img className='w-full h-[40vh]' src={painting} alt="" />
                                <div className='text-center space-y-3 mt-2'>
                                    <h1 className='text-xl font-montserrat font-[600] '>Painting Services</h1>
                                    <p className='font-montserrat'>Painting services involve the professional application of paint to residential or commercial properties, enhancing aesthetics and protecting surfaces with skilled craftsmanship.</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-[80vh]'>
                            <div className='mr-5'>
                                <img className='w-full h-[40vh]' src={Window} alt="" />
                                <div className='text-center space-y-3 mt-2'>
                                    <h1 className='text-xl font-montserrat font-[600] '>Window repair</h1>
                                    <p className='font-montserrat'>Revitalize your view with our professional window repair services. From fixing cracked glass to restoring faulty frames, we ensure clarity and durability for your panes.</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-[80vh]'>
                            <div className='mr-5'>
                                <img className='w-full h-[40vh]' src={hvac} alt="" />
                                <div className='text-center space-y-3 mt-2'>
                                    <h1 className='text-xl font-montserrat font-[600] '>Painting Services</h1>
                                    <p className='font-montserrat'>Elevate your indoor comfort with our comprehensive HVAC solutions. From expert installation of cutting-edge systems to meticulous maintenance and rapid repairs. </p>
                                </div>
                            </div>
                        </div>

                    </Carousel>;
                </div>
            </div>
        </div>
    );
};

export default Home;