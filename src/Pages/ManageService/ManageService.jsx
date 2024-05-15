import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { MdDeleteForever } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './ManageServices.css'
import { Hourglass } from 'react-loader-spinner';


const ManageService = () => {

    const { user } = UseAuth()
    const [manage, setManage] = useState([])
    const [loading, setLoading] = useState(true)
    const [dataError, setDataError] = useState('')

    // console.log(user.email)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/services/${user?.email}`, { withCredentials: true })
            .then(res => {
                // console.log(res.data)
                setManage(res.data)
                setLoading(false)
            })
    }, [user])

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


    // if(!manage || manage.length === 0){
    //     return setDataError('no data')
    // }

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

                axios.delete(`${import.meta.env.VITE_API_URL}/services/${id}`)
                    .then(res => {
                        // console.log(res.data)
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
            <div className='bg-fixed cover bg-no-repeat bg-cover bg-center h-[60vh]'>
                <div className='flex flex-col items-center justify-center space-y-5 h-[60vh]'>
                    <h1 className='lg:text-6xl text-3xl uppercase text-yellow-500'>Manage Your Services</h1>

                </div>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}

                        <thead className='text-[16px] bg-black text-slate-400'>
                            <tr>
                                <th>
                                    <label>

                                    </label>
                                </th>
                                <th>image</th>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Name</th>
                                <th>Service Area</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='h-[20vh]'>

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
                                        <td>{info.price}</td>
                                        <td>{info.ProviderName}</td>
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

                            {
                                manage.length === 0 && (
                                    <div className='flex items-center absolute left-[40%] lg:left-[40%] lg:right-[40%] top-20 text-center'>
                                        <img className='w-10' src="https://img.hotimg.com/image1ae5758da6958592.png" alt="" />
                                        <h1 className='text-4xl'>No Data</h1>
                                    </div>
                                )
                            }



                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageService;