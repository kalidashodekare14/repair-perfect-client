import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { Helmet } from 'react-helmet-async';

const BookedService = () => {

    const { user } = UseAuth()
    const [booked, setBooked] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:5000/purchase/${user?.email}`)
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
            <h1 className='text-3xl text-center my-5'>Your Purchase</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>Image</th>
                                <th>Purchase Name</th>
                                <th>Price</th>
                                <th>address</th>
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
                                        <td>
                                            {book.serviceStatus}
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