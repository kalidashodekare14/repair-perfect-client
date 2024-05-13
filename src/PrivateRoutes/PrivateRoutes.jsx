import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';
import loading from '../assets/loading.gif'

const PrivateRoutes = ({ children }) => {

    const { user, loader } = UseAuth()
    const location = useLocation()
    // console.log(location)

    if (loader) {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <img className='w-20' src={loading} alt="" />
            </div>
        )
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;