import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import './Services.css'
import { render } from 'react-dom';
import { Hourglass } from 'react-loader-spinner';

const Services = () => {

    const [services, setServices] = useState([])
    const [search, setSearch] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)
    // const [itemPerPage, setItemPerPage] = useState(10)
    const itemPerPage = 6
    const { count } = useLoaderData()
    const numberOfPages = Math.ceil(count / itemPerPage);
    const pages = [...Array(numberOfPages).keys()];
    // console.log(pages)

    // console.log(currentPage)
    console.log(services)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/services?page=${currentPage}&size=${itemPerPage}`)
            .then(res => {
                // console.log(res.data)
                setServices(res.data)
                setSearch(res.data)
                setLoading(false)
            })
    }, [currentPage, itemPerPage])

    const handleLowPrice = () => {
        const sort = services.sort((a, b) => a.price - b.price)
        setServices([...sort])
    }
    const handleHighPrice = () => {
        const sort = services.sort((a, b) => b.price - a.price)
        setServices([...sort])
    }



    // useEffect(() => {
    //     axios.get(`${import.meta.env.VITE_API_URL}/services`)
    //         .then(res => {
    //             // console.log(res.data)
    //             setServices(res.data)
    //             setSearch(res.data)
    //             setLoading(false)
    //         })
    // }, [])

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


    const handleSearch = e => {
        setSearch(services.filter(s => s.service_name.toLowerCase().includes(e.target.value)))
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }


    return (
        <div>
            <Helmet>
                <title>Services || Repair Perfect</title>
            </Helmet>
            <div className='bg-fixed cover bg-no-repeat bg-cover bg-center h-[60vh]'>
                <div className='flex flex-col items-center justify-center space-y-5 h-[60vh]'>
                    <h1 className='text-6xl uppercase text-yellow-500'>Services</h1>
                    <input onChange={handleSearch} type="text" placeholder="Search Your Services" className="form-control input input-bordered w-full max-w-xs" />
                    <details className="dropdown">
                        <summary className="m-1 btn">Price Sort</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={handleLowPrice}><a>Low Price</a></li>
                            <li onClick={handleHighPrice}><a>High Price</a></li>
                        </ul>
                    </details>
                </div>
            </div>

            <div className='lg:mx-40 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 my-20'>
                {
                    search.map(service => (
                        <div key={service._id} className="flex flex-col lg:flex-row justify-center items-center bg-base-100 shadow-xl">
                            <div className='relative '>
                                <div>
                                    <figure><img className='h-[40vh] max-w-sm rounded-lg shadow-2xl' src={service.photoUrl} alt="Shoes" /></figure>
                                </div>
                                <div class="absolute top-0 bg-green-500 p-2 text-white">
                                    <h1>${service.price}</h1>
                                </div>
                            </div>
                            <div className="flex-1 p-5 space-y-5">
                                <div className='flex justify-between items-center'>
                                    <h2 className="text-[25px] font-poetsen">{service.service_name}</h2>
                                    <h3 className='bg-[#2a9d8f] px-2 py-2 rounded-xl text-white'>{service.service_area}</h3>
                                </div>
                                <p className='font-roboto text-slate-500 font-[600]'>{service.description.slice(0, 200)}</p>
                                <div className="flex justify-between items-center ">
                                    <div className='flex items-center border px-3 py-1 rounded'>
                                        <div tabIndex={0} role="button" className=" btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt="image loading" src={service.provider.image} />
                                            </div>
                                        </div>
                                        <div>
                                            <h1>{service.provider.name}</h1>
                                        </div>
                                    </div>
                                    <Link to={`/services_details/${service._id}`}>
                                        <button className='btn border-blue-500 hover:text-white hover:bg-blue-500 bg-opacity-0'>View Details</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className=' flex my-10 lg:space-x-5 space-x-1 justify-center items-center '>
                <button onClick={handlePrevPage} className='btn'>Prev</button>
                {
                    pages.map(page => <button
                        onClick={() => setCurrentPage(page)}
                        key={page}
                        className={`${currentPage === page ? 'bg-green-500' : undefined} btn`}>{page}</button>)
                }
                <button onClick={handleNextPage} className='btn'>Next</button>
            </div>

        </div>
    );
};

export default Services;