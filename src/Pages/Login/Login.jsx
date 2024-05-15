import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png'
import './Login.css'
import { MdOutlineMail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import UseAuth from '../../Hooks/UseAuth';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';



const Login = () => {


    const { user, handleLoginUser, handleGoogleUser } = UseAuth()
    const location = useLocation()
    const navigate = useNavigate()


    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)

        handleLoginUser(email, password)
            .then((result) => {
                // console.log(result.user)
                navigate(location?.state ? location.state : '/')
                toast.success("Your Register Successfuly")
            })
            .catch((error) => {
                // console.log(error.message)
                toast.error("Something is rong")
            })
    }

    const handleGoogleLogin = e => {
        handleGoogleUser()
            .then((result) => {
                // console.log(result.user)
                navigate('/')
            })
            .catch((error) => {
                // console.log(error.message)
            })
    }


    if (user) {
        navigate('/')
    }


    return (
        <div className='flex justify-center items-center background min-h-screen bg-cover bg-center bg-no-repeat'>
            <Helmet>
                <title>Login || Repair Perfect</title>
            </Helmet>
            <div className='w-2/5	 p-10 border backdrop-blur-lg'>
                <form onSubmit={handleLogin} className='space-y-3'>
                    <h1 className='text-center text-4xl text-white'>Log In</h1>

                    <div className='flex items-center  border px-3'>
                        <label className='text-2xl' htmlFor=""><MdOutlineMail /></label>
                        <input className='w-full input bg-opacity-0 placeholder-black' type="email" name="email" placeholder='email' id="" />
                    </div>
                    <div className='flex items-center  border px-3'>
                        <label className=' text-2xl' htmlFor=""><FaLock />
                        </label>
                        <input className='w-full input bg-opacity-0 placeholder-black' type="password" name="password" placeholder='password' id="" />
                    </div>
                    <input className='btn w-full mt-5 bg-opacity-5' type="submit" value="Log In" />
                </form>
                <div className='my-5 flex justify-center'>
                    <div onClick={handleGoogleLogin}>
                        <button className='btn w-40'>
                            <img className='w-10' src={google} alt="" />
                        </button>
                    </div>
                </div>
                <p className='mt-10'>Don't have an account?
                    <span className='text-green-500'><Link to="/sign_up">Sign Up</Link></span></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;