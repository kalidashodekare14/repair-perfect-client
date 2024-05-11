import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { MdDeleteForever } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';



const ManageService = () => {

    const { user } = UseAuth()
    const [manage, setManage] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:5000/services/${user?.email}`)
            .then(res => {
                // console.log(res.data)
                setManage(res.data)
            })
    }, [user])

    // console.log(manage)

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/services/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted",
                                text: "Your Service has been deleted.",
                                icon: "success"
                            });
                            const reaming = manage.filter(data => data._id !== id)
                            setManage(reaming)
                        }
                    })


            }
        });

    }

    return (
        <div>
            <Helmet>
                <title>Manage Service || Repair Perfect</title>
            </Helmet>
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
                                <th>image</th>
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
                                    <tr key={info._id}>
                                        <th>
                                            <label>
                                                <span>{index}</span>
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-20">
                                                        <img src={info.photoUrl} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{info.service_name}</td>
                                        <td>${info.price}</td>
                                        <td>{info.providerEmail}</td>
                                        <td>{info.service_area}</td>
                                        <td>
                                            <div className='flex items-center  space-x-5'>
                                                <Link to={`/update_manage/${info._id}`} className='btn'>
                                                    <FaPen className='text-[19px]' />
                                                </Link><div onClick={() => handleDelete(info._id)} className='btn'>
                                                    <MdDeleteForever className='text-2xl' />
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