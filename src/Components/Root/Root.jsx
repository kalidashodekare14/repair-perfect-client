import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import "./Root.css";

const Root = () => {



    return (
        <div className='relative'>
            <div>
                <Navbar></Navbar>
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