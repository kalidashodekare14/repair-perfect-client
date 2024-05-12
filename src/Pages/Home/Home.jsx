import React, { useEffect, useState } from 'react';
import Slider from './Slider/Slider';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        </div>
    );
};

export default Home;