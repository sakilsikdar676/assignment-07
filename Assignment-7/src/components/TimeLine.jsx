import React from 'react';

const TimeLine = () => {
    return (

        <div className="bg-gray-100">
            <div className="flex flex-col gap-4 p-4 max-w-9/12 mx-auto pt-20">
                {/* Title Section */}
                <h2 className="text-3xl font-bold text-[#1e293b]">Timeline</h2>

                {/* Filter Dropdown */}
                <div className="relative max-w-55">
                    <select
                        className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-2 text-sm text-slate-500 shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-100 cursor-pointer"
                        defaultValue=""
                    >
                        
                        <option value="all">All Activities</option>
                        <option value="calls">Calls</option>
                        <option value="calls">video</option>
                        <option value="messages">Messages</option>
                    </select>

                    {/* Custom Arrow Icon (Optional but looks better) */}
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeLine;