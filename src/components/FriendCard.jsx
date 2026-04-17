import React from 'react';
import { NavLink } from 'react-router';

const FriendCard = ({ friend }) => {
    return (
        <NavLink to={`/FriendDetails/${friend.id}`} className="bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm flex flex-col items-center ">

            <img src={friend.picture}
                alt="Profile" className="w-24 h-24 rounded-full mb-5 object-cover" />


            <h3 className="text-2xl font-bold text-[#1e3a31] mb-2">{friend.name}</h3>


            <p className="text-[#6b7280] text-sm mb-4 font-normal">{friend.days_since_contact}d ago</p>


            <span
                className="bg-[#d1fae5] text-[#166534] text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wider uppercase">
                {friend.tags}
            </span>

            <span className={`${friend.status === 'on_track' ? 'bg-green-700 text-white' :friend.status === 'overdue' ? 'bg-yellow-700 text-white' : 'bg-red-800 text-white'} text-xs font-bold px-4 py-1 rounded-full`}>
                {friend.status}
            </span>
        </NavLink>
    );
};

export default FriendCard;