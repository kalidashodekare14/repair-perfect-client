import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { RotatingLines } from 'react-loader-spinner';

const Root = () => {
    const navigation = useNavigation()
    console.log(navigation)
    return (
        <div className='relative'>
            <div>
                <Navbar></Navbar>
            </div>
            <div>

            </div>
            <div className='pt-[71px]'>
                <Outlet />
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;