import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './UpdateManage.css'

const UpdateManage = () => {


    const manage = useLoaderData()
    const { _id, service_name, price, photoUrl, service_area, description } = manage
    console.log(_id)
    const navigate = useNavigate()


    const updateService = e => {
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
            description: description
        }
        axios.put(`http://localhost:5000/update_services/${_id}`, addService)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Service has been Update",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/manage_service')
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Update Manage || Repair Perfect</title>
            </Helmet>
            <div className="bg-fixed cover bg-no-repeat bg-cover bg-center">
                <div className='flex min-h-screen justify-center items-center'>
                    <form onSubmit={updateService} className='lg:w-3/6 border bg-white p-5  space-y-5'>
                        <h1 className='font-poetsen text-4xl text-center my-10'>Update Your Service</h1>
                        <div className='flex space-x-3 items-center'>
                            <div className='w-full'>
                                <input className='input input-bordered w-full' defaultValue={service_name} type="name" name='name' />
                            </div>
                            <div className='w-full'>
                                <input className='input input-bordered w-full' defaultValue={'$' + price} type="price" name='price' />
                            </div>
                        </div>
                        <div className='flex space-x-3 items-center'>
                            <div className='w-full'>
                                <input className='input input-bordered w-full' defaultValue={photoUrl} type="photo" name='photo' />
                            </div>
                            <div className='w-full'>
                                <input className=' input input-bordered w-full' defaultValue={service_area} type="area" name='area' />
                            </div>
                        </div>
                        <div>
                            <textarea defaultValue={description} name="description" className="w-full textarea textarea-bordered" id=""></textarea>
                        </div>
                        <div className='flex justify-center items-center'>
                            <input className='btn w-full bg-[#c99e42cd]' type="submit" value="Update Sevice" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateManage;