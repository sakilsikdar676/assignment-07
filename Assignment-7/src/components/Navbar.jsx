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
                <div className="flex-none">
                    <NavLink to="/" className="btn border-none bg-transparent text-xl"><IoHomeOutline /> Home</NavLink>
                    <NavLink to="/TimeLine" className="btn border-none bg-transparent text-xl"><IoTimeOutline /> TimeLine</NavLink>
                    <NavLink to="/stats" className="btn border-none bg-transparent text-xl"><TfiStatsUp /> Stats</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;