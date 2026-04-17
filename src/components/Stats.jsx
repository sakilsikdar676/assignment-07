
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendsContext } from '../context/friendsContext';



const Stats = () => {
    const { callFriend, textFriend, videocallFriend } = useContext(FriendsContext);
    const noData = callFriend.length === 0 && textFriend.length === 0 && videocallFriend.length === 0

    const data = [
        { name: 'Text', value: textFriend.length, fill: '#7f37f5' },
        { name: 'Call', value: callFriend.length, fill: '#244d3f' },
        { name: 'VideoCall', value: videocallFriend.length, fill: '#37a163' },

    ];
    return (
        <div className=' container mx-auto '>

            {
                noData ? <div className="flex flex-col items-center justify-center min-h-[450px] bg-gradient-to-b from-transparent to-gray-50 rounded-3xl p-12 text-center border border-gray-100 shadow-inner">

                    {/* Animated Illustration Area */}
                    <div className="relative mb-10">
                        {/* Background Glow */}
                        <div className="absolute -inset-10 bg-orange-100 rounded-full blur-2xl opacity-40 animate-pulse"></div>

                        {/* Icon with Style */}
                        <div className="relative flex items-center justify-center">
                            <div className="text-9xl animate-[wiggle_1s_ease-in-out_infinite]">📊</div>
                            <div className="absolute -right-4 -top-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full rotate-12 shadow-lg">
                                0% Data Found
                            </div>
                        </div>
                    </div>

                    {/* Text Section */}
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

                        {/* Funny Action Suggestion */}
                        <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-2xl shadow-sm border border-orange-100">
                            <span className="text-2xl animate-bounce">🚀</span>
                            <div className="text-left">
                                <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Recommendation</p>
                                <p className="text-sm font-bold text-slate-700 italic">"Bondhuder kothai bhule gele naki?"</p>
                            </div>
                        </div>
                    </div>
                </div> : <div className='m-2'>
                    <h1 className='font-bold md:text-2xl mt-6' >Friendship Analytics</h1>

                    <div className="my-10 shadow-lg p-5 md:p-10 rounded-md border border-slate-100 bg-white ">
                        <p className='font-semibold mb-5'>By Interaction Type</p>

                        <PieChart style={{ width: '300px', height: '300px', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1, margin: 'auto' }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                cornerRadius="50%"
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <Legend />
                            <Tooltip />
                        </PieChart>
                    </div>

                </div>
            }







        </div>
    );
};

export default Stats;