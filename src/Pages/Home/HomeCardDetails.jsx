import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const HomeCardDetails = () => {

    const detail = useLoaderData()


    return (
        <div>
            <div className="mt-10 min-h-screen flex- justify-center items-center">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div>
                        <h1 className="text-5xl font-bold">{detail.service_name}</h1>
                        <p className="py-6 text-[16px] font-[500] text-slate-500">{detail.description.slice(0, 150)}</p>
                        <div className='flex space-x-20 items-center pb-10'>
                            <div className='flex items-center border px-3 py-1 rounded'>
                                <div className='flex items-center'>
                                    <div tabIndex={0} role="button" className=" btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={detail.provider.image} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1>{detail.provider.name}</h1>
                                </div>
                            </div>
                            <div>
                                <span className='text-2xl font-poetsen'>${detail.price}</span>
                            </div>
                        </div>
                        <Link to="/">
                        <button className='btn border-blue-500 hover:text-white hover:bg-blue-500 bg-opacity-0'>Go Back</button>
                        </Link>
                    </div>
                    <img src={detail.photoUrl} className="lg:w-2/4 lg:h-[80vh] rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default HomeCardDetails;