import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import UseAuth from '../../Hooks/UseAuth';
import { useLoaderData } from 'react-router-dom';
import './ServiceToDo.css'

const ServiceToDo = () => {

    const { user } = UseAuth()
    const [serviceToDo, setServiceToDo] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/service_to_do/${user?.email}`)
            .then(res => {
                // console.log(res.data)
                setServiceToDo(res.data)
            })
    }, [serviceToDo])

    // console.log(serviceToDo)

    const handleStatus = (_id, serviceStatus) => {
        axios.patch(`http://localhost:5000/purchase/${_id}`, { serviceStatus })
            .then(res => {
                console.log(res.data)
            })
    }



    return (
        <div>
            <Helmet>
                <title>Service To Do || Repair Perfect</title>
            </Helmet>
            <div className='bg-fixed cover bg-no-repeat bg-cover bg-center h-[60vh]'>
                <div className='flex flex-col items-center justify-center space-y-5 h-[60vh]'>
                    <h1 className='lg:text-6xl text-4xl uppercase text-yellow-500'>Services To Do</h1>

                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='text-[16px] bg-black text-slate-400'>
                        <tr>
                            <th>Image</th>
                            <th>Purchase Name</th>
                            <th>Price</th>
                            <th>address</th>
                            <th>Date</th>
                            <th>Service Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='h-[20vh]'>

                        {
                            serviceToDo.map(book => (
                                <tr key={book._id}>

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
                                        <span
                                            className={`${book.serviceStatus === 'pending' ? 'bg-blue-500' : book.serviceStatus === 'working' ? 'bg-yellow-300' : book.serviceStatus === 'completed' ? 'bg-green-500' : ''} p-2 rounded-2xl`}>
                                            {book.serviceStatus}
                                        </span>
                                    </td>
                                    <td>
                                        <details className="dropdown">
                                            <summary className="m-1 btn">Status Customize</summary>
                                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                                <li onClick={() => handleStatus(book._id, 'pending')}><a>pending</a></li>
                                                <li onClick={() => handleStatus(book._id, 'working')}><a>working</a></li>
                                                <li onClick={() => handleStatus(book._id, 'completed')}><a>completed</a></li>
                                            </ul>
                                        </details>
                                    </td>


                                </tr>
                            ))
                        }



                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default ServiceToDo;