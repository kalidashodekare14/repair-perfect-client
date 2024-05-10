import { Link } from 'react-router-dom';
import google from '../../assets/google.png'
import './Login.css'
import { MdOutlineMail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import UseAuth from '../../Hooks/UseAuth';



const Login = () => {

    const { handleLoginUser, handleGoogleUser } = UseAuth()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        handleLoginUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGoogleLogin = e => {
        handleGoogleUser()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }


    return (
        <div className='flex justify-center items-center background min-h-screen bg-cover bg-center bg-no-repeat'>
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
                        <input className='w-full input bg-opacity-0 placeholder-black' type="photo" name="password" placeholder='password' id="" />
                    </div>
                    <input className='btn w-full mt-5 bg-opacity-5' type="submit" value="Log In" />
                    <div className='my-5 flex justify-center'>
                        <div onClick={handleGoogleLogin}>
                            <button className='btn w-40'>
                                <img className='w-10' src={google} alt="" />
                            </button>
                        </div>
                    </div>
                </form>
                <p className='mt-10'>Don't have an account?
                    <span className='text-green-500'><Link to="/sign_up">Sign Up</Link></span></p>
            </div>
        </div>
    );
};

export default Login;