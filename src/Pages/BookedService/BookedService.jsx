import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { Helmet } from 'react-helmet-async';
import './BookedService.css'

const BookedService = () => {

    const { user } = UseAuth()
    const [booked, setBooked] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/purchase/${user?.email}`, { withCredentials: true })
            .then(res => {
                setBooked(res.data)
                console.log(res.data)
            })
    }, [user])




    return (
        <div>
            <Helmet>
                <title>Purchase  || Repair Perfect</title>
            </Helmet>
            <div className='bg-fixed cover bg-no-repeat bg-cover bg-center h-[50vh]'>
                <div className='flex flex-col items-center justify-center space-y-5 h-[50vh]'>
                    <h1 className='text-6xl uppercase text-yellow-500'>Your Purchase</h1>
                </div>
            </div>
            <div className='h-[40vh]'>
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead className='text-[16px] bg-black text-slate-400'>
                            <tr>
                                <th>

                                </th>
                                <th>Image</th>
                                <th>Purchase Name</th>
                                <th>Price</th>
                                <th>address</th>
                                <th>
                                    Date
                                </th>
                                <th>Service Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                booked.map(book => (
                                    <tr key={book._id}>
                                        <th>

                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-20">
                                                        <img className='w-20' src={book.service_image} alt="" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            {book.service_Name}
                                        </td>
                                        <td>
                                            ${book.price}
                                        </td>
                                        <td>{book.address}</td>
                                        <td>{book.service_taking_date}</td>
                                        <td>
                                            <span className={`${book.serviceStatus === 'pending' ? 'bg-blue-500' : book.serviceStatus === 'working' ? 'bg-yellow-300' : book.serviceStatus === 'completed' ? 'bg-green-500' : ''} p-2 rounded-2xl`}>
                                                {book.serviceStatus}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            }



                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookedService;