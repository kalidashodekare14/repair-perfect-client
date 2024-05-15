import React from 'react';
import error from '../../assets/404.svg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='space-y-3 min-h-screen flex flex-col justify-center items-center'>
            <h1 className='text-6xl'>Opps</h1>
            <p className='text-2xl'>Page not Found</p>
            <Link to="/">
                <button className={`btn border-blue-500 hover:text-white hover:bg-blue-500 bg-opacity-0`}>Go Back</button>
            </Link>

        </div>
    );
};

export default ErrorPage;