import { Link } from 'react-router-dom';
import google from '../../assets/google.png'
import { FaLock, FaUser } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { IoMdPhotos } from 'react-icons/io';
import UseAuth from '../../Hooks/UseAuth';

const SignUp = () => {

    const {handleRegisterUser, updateProfileUser} = UseAuth()

    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        // console.log(name, email, photo, password)
        handleRegisterUser(email, password)
        .then(result =>{
            console.log(result.user)
            updateProfileUser(name, photo)
            
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <div>
            <div className='flex justify-center items-center background min-h-screen bg-cover bg-center bg-no-repeat'>
                <div className='w-2/5	 p-10 border backdrop-blur-lg'>
                    <form onSubmit={handleRegister} className='space-y-3'>
                        <h1 className='text-center text-4xl text-white'>Sign Up</h1>
                        <div className='flex items-center  border px-3'>
                            <label className=' text-2xl' htmlFor=""><FaUser /></label>
                            <input className='bg-opacity-0 w-full input text-black placeholder-black' type="text" name="name" placeholder='Name' id="" />
                        </div>
                        <div className='flex items-center  border px-3'>
                            <label className='text-2xl' htmlFor=""><MdOutlineMail /></label>
                            <input className='w-full input bg-opacity-0 placeholder-black' type="email" name="email" placeholder='email' id="" />
                        </div>
                        <div className='flex items-center  border px-3'>
                            <label className=' text-2xl' htmlFor=""><IoMdPhotos />
                            </label>
                            <input className='w-full input bg-opacity-0 placeholder-black' type="photo" name="photo" placeholder='photo' id="" />
                        </div>
                        <div className='flex items-center  border px-3'>
                            <label className=' text-2xl' htmlFor=""><FaLock />
                            </label>
                            <input className='w-full input bg-opacity-0 placeholder-black' type="photo" name="password" placeholder='password' id="" />
                        </div>
                        <input className='btn w-full mt-5 bg-opacity-5' type="submit" value="Sign Up" />
                        <div className='my-5 flex justify-center'>
                            <Link>
                                <button className='btn w-40'>
                                    <img className='w-10' src={google} alt="" />
                                </button>
                            </Link>
                        </div>
                    </form>
                    <p className='mt-10'>Don't have an account?
                        <span className='text-green-500'><Link to="/login">Sign Up</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;