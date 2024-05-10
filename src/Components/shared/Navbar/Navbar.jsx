import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';

const Navbar = () => {

    const { user, handleLogoutUser } = UseAuth()


    const links = <>
        <li>
            <NavLink
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active:bg-none border-b-2 rounded-none border-[#fbd232]" : ""
                }
                to="/">Home
            </NavLink>
        </li>
        <li>
            <NavLink
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active:bg-none border-b-2 rounded-none border-[#fbd232]" : ""
                }
                to="/services">Services</NavLink>
        </li>

    </>


    const handleLogout = () =>{
        handleLogoutUser()
    }


    return (
        <div className="shadow absolute z-10 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-end  hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
                <div>
                    {
                        user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                   <img src={user.photoURL} alt="" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to="/add_service">Add Service</Link>
                                </li>
                                <li>
                                    <Link to="/manage_service">Manage Service</Link>
                                </li>
                                <li>
                                    <Link to="/booked_service">Booked Service</Link>
                                </li>
                                <li>
                                    <Link to="/service_to_do">Service To Do</Link>
                                </li>
                                <li><span onClick={handleLogout}>Logout</span></li>
                            </ul>
                        </div>
                            : <Link to="/login">
                                <button className='btn'>Login</button>
                            </Link>
                    }
                </div>


            </div>

        </div>
    );
};

export default Navbar;