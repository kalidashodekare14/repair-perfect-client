import { Link, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png'
import { FaLock, FaUser } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { IoMdPhotos } from 'react-icons/io';
import UseAuth from '../../Hooks/UseAuth';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const { handleRegisterUser, updateProfileUser } = UseAuth()
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value

        if (password.length < 6) {
            return toast.warning('Must be 6 Character')
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.warning('Any one character must be in Uppercase')
        }
        else if (!/[a-z]/.test(password)) {
            return toast.warning('Must be Lowsercase')
        }

        handleRegisterUser(email, password)
            .then((result) => {
                // console.log(result.user)
                updateProfileUser(name, photo)
                navigate('/')
                toast.success('Your Register Succesfuly')
            })
            .catch((error) => {
                // console.log(error.message)
                toast.error('Something is rong')
            })
    }

    return (
        <div>
            <Helmet>
                <title>Sign Up || Repair Perfect</title>
            </Helmet>
            <div className='flex justify-center items-center bg-fixed background min-h-screen bg-cover bg-center bg-no-repeat'>
                <div className='w-2/5	 p-10 border backdrop-blur-lg'>
                    <form onSubmit={handleRegister} className='space-y-3'>
                        <h1 className='text-center text-4xl text-white'>Sign Up</h1>
                        <div className='flex items-center  border px-3'>
                            <label className=' text-2xl' htmlFor=""><FaUser /></label>
                            <input className='bg-opacity-0 w-full input text-black placeholder-black' type="text" name="name" placeholder='Name' />
                        </div>
                        <div className='flex items-center  border px-3'>
                            <label className='text-2xl' htmlFor=""><MdOutlineMail /></label>
                            <input className='w-full input bg-opacity-0 placeholder-black' type="email" name="email" placeholder='email' />
                        </div>
                        <div className='flex items-center  border px-3'>
                            <label className=' text-2xl' htmlFor=""><IoMdPhotos />
                            </label>
                            <input className='w-full input bg-opacity-0 placeholder-black' type="photo" name="photo" placeholder='photo' />
                        </div>
                        <div className='flex items-center  border px-3'>
                            <label className=' text-2xl' htmlFor=""><FaLock />
                            </label>
                            <input className='w-full input bg-opacity-0 placeholder-black' type="password" name="password" placeholder='password' />
                        </div>
                        <input className='btn w-full mt-5 bg-opacity-5' type="submit" value="Sign Up" />
                        
                    </form>
                    <p className='mt-10'>Already have an account?
                        <span className='text-green-500'><Link to="/login">Log in</Link></span></p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;