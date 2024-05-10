import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { MdDeleteForever } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';



const ManageService = () => {

    const { user } = UseAuth()
    const [manage, setManage] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:5000/services/${user?.email}`)
            .then(res => {
                console.log(res.data)
                setManage(res.data)
            })
    }, [manage])

    console.log(manage)

    return (
        <div>
            <h1 className='text-4xl text-center my-5'>Manage Your Services</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>

                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Email</th>
                                <th>Service Area</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                manage.map((info, index) => (
                                    <tr>
                                        <th>
                                            <label>
                                                <span>{index}</span>
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={info.providerImage} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{info.ProviderName}</div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{info.service_name}</td>
                                        <td>${info.price}</td>
                                        <td>{info.providerEmail}</td>
                                        <td>{info.service_area}</td>
                                        <td>
                                            <div className='flex items-center  space-x-5'>
                                                <div className='btn'>
                                                    <MdDeleteForever className='text-2xl' />
                                                </div>
                                                <div className='btn'>
                                                    <FaPen className='text-[19px]' />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                            {/* row 2 */}


                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageService;