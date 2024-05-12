import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';

const Root = () => {
    return (
        <div className='relative'>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='pt-[71px]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;