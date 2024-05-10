import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(res => {
                console.log(res.data)
                setServices(res.data)
            })
    }, [])

    console.log(services)

    return (
        <div className='lg:mx-20'>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => (
                        <div key={service._id} className="card card-compact bg-base-100 shadow-xl">
                            <div className='relative'>
                                <figure><img className='h-[40vh] w-full' src={service.photoUrl} alt="Shoes" /></figure>
                                <div class="absolute top-0 opacity-0 hover:opacity-100  transition duration-700 ease-in-out hover:bg-amber-500 h-[40vh] flex w-full p-1 justify-center [clip-path:polygon(100%_19%,24%_100%,100%_100%)]">
                                    <p className='absolute  right-20 bottom-10 text-4xl text-white'>${service.price}</p>
                                </div>
                            </div>
                            <div className="p-5 space-y-5">
                                <div className='flex justify-between items-center'>
                                    <h2 className="text-[25px] font-poetsen">{service.service_name}</h2>
                                    <h3 className='bg-[#2a9d8f] px-2 py-2 rounded-xl text-white'>{service.service_area}</h3>
                                </div>
                                <p className='font-roboto text-slate-500 font-[600]'>{service.description}</p>
                                <div className="flex justify-between items-center ">
                                    <div className='flex items-center border px-3 py-1 rounded'>
                                        <div tabIndex={0} role="button" className=" btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt="Tailwind CSS Navbar component" src={service.providerImage} />
                                            </div>
                                        </div>
                                        <div>
                                            <h1>{service.ProviderName}</h1>
                                        </div>
                                    </div>
                                    <button className='btn border-blue-500 hover:text-white hover:bg-blue-500 bg-opacity-0'>View Details</button>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Services;