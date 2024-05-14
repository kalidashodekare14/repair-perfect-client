import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';
import loading from '../assets/loading.gif'
import { Hourglass } from 'react-loader-spinner';

const PrivateRoutes = ({ children }) => {

    const { user, loader } = UseAuth()
    const location = useLocation()
    // console.log(location)

    if (loader) {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#306cce', '#72a1ed']}
                />
            </div>

        )
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;