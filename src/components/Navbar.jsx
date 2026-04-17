import React from 'react';
import { NavLink } from 'react-router';
import { IoHomeOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
    return (
        <div className=' bg-base-100 shadow-sm'>
            <div className="navbar max-w-10/12 mx-auto">
                <div className="flex-1">
                    <a className="btn border-none bg-transparent text-xl">
                        <span className='text-[#1F2937] text-2xl font-bold'>Keen</span>
                        <span className='text-[#244D3F] text-2xl font-bold'>Keeper</span>
                    </a>
                </div>
                <div className="flex-none hidden lg:flex">
                    <NavLink to="/" className="btn border-none bg-transparent text-xl"><IoHomeOutline /> Home</NavLink>
                    <NavLink to="/TimeLine" className="btn border-none bg-transparent text-xl"><IoTimeOutline /> TimeLine</NavLink>
                    <NavLink to="/stats" className="btn border-none bg-transparent text-xl"><TfiStatsUp /> Stats</NavLink>
                </div>
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        <li>
                            <NavLink to="/" className="btn border-none bg-transparent text-xl"><IoHomeOutline /> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/TimeLine" className="btn border-none bg-transparent text-xl"><IoTimeOutline /> TimeLine</NavLink>
                        </li>
                        <li>
                            <NavLink to="/stats" className="btn border-none bg-transparent text-xl"><TfiStatsUp /> Stats</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;