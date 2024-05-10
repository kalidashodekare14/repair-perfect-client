import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddService = () => {

    const { user } = UseAuth()


    const handleAddService = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const price = form.price.value
        const photo = form.photo.value
        const area = form.area.value
        const description = form.description.value
        const addService = {
            service_name: name,
            price: price,
            photoUrl: photo,
            service_area: area,
            description: description,
            providerEmail: user.email,
            providerImage: user.photoURL,
            ProviderName: user.displayName
        }

        axios.post(`http://localhost:5000/services`, addService)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Your Services Add Successfuly",
                        text: "Please check Manage Services",
                        icon: "success"
                    });
                    form.reset()
                }
            })
    }

    return (
        <div>
            <div className='flex min-h-screen bg-base-300 justify-center items-center'>
                <form onSubmit={handleAddService} className='w-3/6 border bg-white p-5  space-y-5'>
                    <h1 className='font-poetsen text-4xl text-center my-10'>Add Your Service</h1>
                    <div className='flex space-x-3 items-center'>
                        <div className='w-full'>
                            <input className='input input-bordered w-full' placeholder='Name' type="name" name='name' />
                        </div>
                        <div className='w-full'>
                            <input className='input input-bordered w-full' placeholder='Price' type="price" name='price' />
                        </div>
                    </div>
                    <div className='flex space-x-3 items-center'>
                        <div className='w-full'>
                            <input className='input input-bordered w-full' placeholder='Photo Url' type="photo" name='photo' />
                        </div>
                        <div className='w-full'>
                            <input className=' input input-bordered w-full' placeholder='Area' type="area" name='area' />
                        </div>
                    </div>
                    <div>
                        <textarea placeholder='Description' name="description" className="w-full textarea textarea-bordered" id=""></textarea>
                    </div>
                    <div className='flex justify-center items-center'>
                        <input className='btn w-full bg-[#c99e42cd]' type="submit" value="Add Sevice" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;