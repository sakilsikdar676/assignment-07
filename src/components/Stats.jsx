import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer } from 'recharts';
import { FriendsContext } from '../context/friendsContext';

const Stats = () => {
    const { callFriend, textFriend, videocallFriend } = useContext(FriendsContext);
    const noData = callFriend.length === 0 && textFriend.length === 0 && videocallFriend.length === 0;

    const data = [
        { name: 'Text', value: textFriend.length, fill: '#7f37f5' },
        { name: 'Call', value: callFriend.length, fill: '#244d3f' },
        { name: 'VideoCall', value: videocallFriend.length, fill: '#37a163' },
    ];

    return (
        <div className='container mx-auto px-4'>
            {noData ? (
                <div className="flex flex-col items-center justify-center min-h-112.5 bg-linear-to-b from-transparent to-gray-50 rounded-3xl p-12 text-center border border-gray-100 shadow-inner">





                    <div className="relative mb-10">



                        <div className="absolute -inset-10 bg-orange-100 rounded-full blur-2xl opacity-40 animate-pulse"></div>





                        <div className="relative flex items-center justify-center">

                            <div className="text-9xl animate-[wiggle_1s_ease-in-out_infinite]">📊</div>

                            <div className="absolute -right-4 -top-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full rotate-12 shadow-lg">

                                0% Data Found

                            </div>

                        </div>

                    </div>





                    <div className="max-w-lg">

                        <h2 className="text-5xl md:text-6xl font-extrabold text-[#1a4d40] mb-6 leading-tight">

                            No Stats <br />

                            <span className="text-orange-500 underline decoration-wavy decoration-orange-200">To Crunch!</span>

                        </h2>



                        <p className="text-xl text-slate-600 font-medium mb-8 leading-relaxed">

                            "Ekhono kaur sathe kothai bolle na, stats ashbe koi theke?

                            Tomar social life ekhon eka 'Nilkantha' hoye boshe ache!

                            Joldi kothao click koro, r chart-er bar gulo ke matha uchu korar shujog daw."

                        </p>





                        <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-2xl shadow-sm border border-orange-100">

                            <span className="text-2xl animate-bounce">🚀</span>

                            <div className="text-left">

                                <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Recommendation</p>

                                <p className="text-sm font-bold text-slate-700 italic">"Bondhuder kothai bhule gele naki?"</p>

                            </div>

                        </div>

                    </div>

                </div>
            ) : (
                <div className='m-2 animate-in fade-in duration-1000 slide-in-from-bottom-4'>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-6">
                        <div>
                            <h1 className='font-black text-3xl md:text-4xl text-[#1a4d40] tracking-tight' >
                                Friendship <span className="text-emerald-500">Analytics</span>
                            </h1>
                            <p className="text-slate-400 font-medium mt-1">Real-time engagement breakdown</p>
                        </div>

                        {/* Floating Status Badge with Pulse Animation */}
                        <div className="hidden md:flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Live Syncing</span>
                        </div>
                    </div>

                    {/* Main Card with Glass Effect & Hover Animation */}
                    <div className="relative group overflow-hidden my-10 shadow-2xl p-5 md:p-10 rounded-3xl border border-slate-100 bg-white transition-all duration-500 hover:shadow-emerald-100">

                        {/* Background Animated Gradient Blobs */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

                        <div className="relative z-10">
                            <p className='font-bold text-lg text-slate-700 mb-8 flex items-center gap-2'>
                                <span className="p-2 bg-slate-100 rounded-lg">📊</span>
                                Interaction Intensity
                            </p>

                            <div className="flex justify-center items-center min-h-[350px]">
                                <ResponsiveContainer width="100%" height={350}>
                                    <PieChart>
                                        <Pie
                                            data={data}
                                            innerRadius="75%"
                                            outerRadius="95%"
                                            cornerRadius={15}
                                            paddingAngle={8}
                                            dataKey="value"
                                            isAnimationActive={true}
                                            animationBegin={200}
                                            animationDuration={1500}
                                            stroke="none"
                                        />
                                        <Tooltip
                                            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                        />
                                        <Legend verticalAlign="bottom" height={36} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Stats;