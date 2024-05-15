import React from 'react';
import error from '../../assets/404.svg'

const ErrorPage = () => {
    return (
        <div className='space-y-3 min-h-screen flex flex-col justify-center items-center'>
           <h1 className='text-6xl'>Opps</h1>
           <p className='text-2xl'>Page not Found</p>
        </div>
    );
};

export default ErrorPage;