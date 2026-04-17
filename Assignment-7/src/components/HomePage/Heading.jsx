import React from 'react';
import { FaPlus } from "react-icons/fa6";

const Heading = () => {


    return (
        <div className="bg-gray-50 pt-16 px-4 font-sans">
            <div className="max-w-6xl mx-auto text-center">

                <h1 className="text-4xl md:text-5xl font-bold text-[#1a2b3b] mb-4">
                    Friends to keep close in your life
                </h1>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>


                <button className="bg-[#1e3a31] hover:bg-[#2a4d41] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 mx-auto transition-colors mb-16 cursor-pointer">
                    <FaPlus />
                    Add a Friend
                </button>

                <div className=" py-10 px-4">
                    <div className="max-w-6xl mx-auto">

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">


                            <div className="bg-white border border-gray-100 rounded-lg py-12 px-4 shadow-sm flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-transparent">
                                <h2 className="text-3xl font-bold text-[#1e3a31] mb-2">10</h2>
                                <p className="text-[#6b7280] text-sm font-medium">Total Friends</p>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-lg py-12 px-4 shadow-sm flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-transparent">
                                <h2 className="text-3xl font-bold text-[#1e3a31] mb-2">3</h2>
                                <p className="text-[#6b7280] text-sm font-medium">On Track</p>
                            </div>


                            <div className="bg-white border border-gray-100 rounded-lg py-12 px-4 shadow-sm flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-transparent">
                                <h2 className="text-3xl font-bold text-[#1e3a31] mb-2">6</h2>
                                <p className="text-[#6b7280] text-sm font-medium">Need Attention</p>
                            </div>


                            <div className="bg-white border border-gray-100 rounded-lg py-12 px-4 shadow-sm flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-transparent">
                                <h2 className="text-3xl font-bold text-[#1e3a31] mb-2">12</h2>
                                <p className="text-[#6b7280] text-sm font-medium">Interactions This Month</p>
                            </div>

                        </div>


                        <div className="mt-12 border-t border-gray-200"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heading;