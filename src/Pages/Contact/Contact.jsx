import React from 'react';
import { FaHome } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <div>fdddf</div>;

const Contact = () => {

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };


    return (
        <div className='min-h-screen w-full'>
            <div className=''>
                <div className='bg-fixed cover bg-no-repeat bg-cover bg-center h-[60vh]'>
                    <div className='flex flex-col items-center justify-center space-y-5 h-[60vh]'>
                        <h1 className='text-6xl uppercase text-yellow-500'>Contect</h1>
                    </div>
                </div>
                <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </div>
            <div className='min-h-screen bg-fixed cover bg-no-repeat bg-cover bg-center flex justify-center'>
                <div className='lg:mx-20 my-20 lg:space-x-32 flex flex-col lg:flex-row justify-between items-center'>
                    <div className='lg:w-2/3 space-y-8 bg-[#000000ac] p-10'>
                        <div className='w-full'>
                            <input className='w-full input input-bordered' type="text" placeholder='Name' name="name" id="" />
                        </div>
                        <div className='w-full'>
                            <input className='w-full input input-bordered' type="text" placeholder='Email' name="email" id="" />
                        </div>
                        <div className='w-full'>
                            <input className='w-full input input-bordered' type="text" placeholder='Subject' name="email" id="" />
                        </div>
                        <div className='w-full'>
                            <input className='w-full input input-bordered' type="text" placeholder='Your Message' name="email" id="" />
                        </div>
                        <div>
                            <textarea placeholder='Type Your Message' className='textarea-bordered textarea w-full h-32' name="" id=""></textarea>
                        </div>
                        <div>
                            <input className='btn text-white hover:bg-yellow-500 w-32 bg-opacity-0 border-yellow-500' type="submit" value="submit" />
                        </div>
                    </div>
                    <div className='space-y-3 bg-black text-white py-10 px-10'>
                        <h1 className='text-2xl font-montserrat font-[700]'>Discover exclusive deals when you give us a call today</h1>
                        <div className='flex space-x-5 items-center'>
                            <div className='bg-yellow-500 p-5'>
                                <IoCallOutline className='text-2xl' />
                            </div>
                            <div className='text-xl'>
                                <h1 className='font-bold text-[22px]'>1-464-48-768</h1>
                                <p className='text-[15px]'>repairperfect@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex space-x-5 items-center'>
                            <div className='bg-yellow-500 p-5'>
                                <FaHome className='text-2xl' />
                            </div>
                            <div className='text-xl'>
                                <h1 className='font-bold text-[22px]'>Greenwood Neighborhood</h1>
                                <p className='text-[15px]'>Seattle, WA 98117</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;