import { Link, useLoaderData } from "react-router-dom";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "react-datepicker/dist/react-datepicker.css";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const ServicesDetails = () => {

    const details = useLoaderData()
    const { user } = UseAuth()
    const [startDate, setStartDate] = useState(new Date());

    const handleBookData = e => {
        e.preventDefault()

        if(user.email === details.provider.email){
            return toast.error("You cannot purchase the services you have added.");
        }


        const from = e.target
        const address = from.address.value
        const bookInfo = {
            serviceId: details._id,
            service_Name: details?.service_name,
            service_image: details?.photoUrl,
            current_user_email: user?.email,
            current_user_name: user?.displayName,
            service_taking_date: startDate,
            price: details?.price,
            address: address,
            serviceStatus: 'pending',
            provider: {
                name:  details?.provider.name,
                email: details?.provider?.email
            }
        }
        axios.post(`${import.meta.env.VITE_API_URL}/purchase`, bookInfo)
        .then(res =>{
            // console.log(res.data)
            if(res.data.insertedId){
                toast.success("Your Purchase Successfuly");
            }
        })
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200">
            <Helmet>
                <title>Services Details || Repair Perfect</title>
            </Helmet>
            <div className="bg-white w-[60%]">
                <div className="flex justify-between items-center flex-col lg:flex-row-reverse">
                    <div className="w-[40%] relative ">
                        <img src={details.photoUrl} className="w-full h-[70vh] rounded-lg shadow-2xl" />
                        <div class="absolute top-0 right-0 h-[50vh] w-[70%] bg-amber-500 flex p-1 justify-center [clip-path:polygon(100%_0%,_100%_43%,_58%_0%)]">
                            <h1 className="absolute text-3xl top-7 right-3 rotate-45">${details.price}</h1>
                        </div>
                    </div>
                    <div className="w-[40%] mx-20">
                        <h1 className="text-5xl font-bold font-poetsen">{details.service_name}</h1>
                        <p className="py-6 text-[17px] font-[500] text-[#00000094]">{details.description}</p>
                        <div className="flex justify-between items-center ">
                            <div className="flex items-center border px-1 py-1">
                                <div className="">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-56 rounded-full">
                                            <img className="w-full" alt="" src={details.provider.image} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2>{details.provider.name}</h2>
                                </div>
                            </div>
                            <div>
                                <h3 className='bg-[#2a9d8f] px-2 py-2 rounded-xl text-white'>{details.service_area}</h3>
                            </div>
                        </div>
                        <div className="mt-10">
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className='btn border-blue-500 hover:text-white hover:bg-blue-500 bg-opacity-0' onClick={() => document.getElementById('my_modal_1').showModal()}>Book Now</button>
                            <dialog id="my_modal_1" className="modal ">
                                <div className="modal-box">
                                    <div className="modal-action">
                                        <form onSubmit={handleBookData}>
                                            <img src={details.photoUrl} alt="" />
                                            <div className="space-y-5 mt-10">
                                                <div className="flex space-x-3 items-center">
                                                    <div className="w-full">
                                                        <input className="input input-bordered w-full" disabled defaultValue={user?.displayName} type="name" name="name" />
                                                    </div>
                                                    <div className="w-full">
                                                        <input className="input input-bordered w-full disabled disabled:input" disabled defaultValue={user?.email} type="email" name="email" />
                                                    </div>
                                                </div>
                                                <div className="flex space-x-3 items-center">
                                                    <div className="w-full">
                                                        <input className="input input-bordered w-full" disabled defaultValue={details.service_name} type="name" name="service_name" />
                                                    </div>
                                                    <div className="w-full">
                                                        <input className="input input-bordered w-full disabled disabled:input" disabled defaultValue={'$' + details.price} type="text" name="price" />
                                                    </div>
                                                </div>
                                                <div className="flex space-x-3 items-center">
                                                    <div className="w-full">
                                                        <input className="input input-bordered w-full" placeholder="address" type="address" name="address" />
                                                    </div>
                                                    <div className="w-full">

                                                        <DatePicker className="input input-bordered w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <input className='btn border-blue-500 hover:text-white hover:bg-blue-500 bg-opacity-0' type="submit" value="Purchase" />
                                                    <form method="dialog">
                                                        <button className='btn border-blue-500 hover:text-white hover:bg-blue-500 bg-opacity-0'>Close</button>
                                                    </form>
                                                </div>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default ServicesDetails;