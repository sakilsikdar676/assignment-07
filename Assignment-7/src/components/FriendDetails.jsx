import React, { use } from 'react';
import { FaBell, FaArchive, FaTrashAlt, FaPhoneAlt, FaCommentDots, FaVideo } from 'react-icons/fa';
import { useParams } from 'react-router';


const FriendDetails = ({ friendsDatas }) => {

    const { id } = useParams();
    console.log(id);

    const friendsData = use(friendsDatas);
    console.log(friendsData);

    const findFriend = friendsData.find(friendData => friendData.id == id);
    console.log(findFriend);


    

    return (
        <div className=" bg-gray-100 ">
            <div className="max-w-4xl mx-auto p-6 rounded-lg font-sans">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Left Side: Profile Card */}
                    <div className="md:col-span-1 space-y-4">
                        <div className="bg-white p-6 rounded-xl shadow-sm  text-center">
                            <img
                                src={findFriend.picture}
                                alt={findFriend.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover -4 -gray-100"
                            />
                            <h2 className="text-xl font-bold text-gray-800">{findFriend.name}</h2>
                            <div className="flex flex-col items-center gap-2 mt-2">
                                <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold uppercase">
                                    {findFriend.tags}
                                </span>
                                <span className={`${findFriend.status === 'on_track' ? 'bg-green-700 text-white' : findFriend.status === 'overdue' ? 'bg-yellow-700 text-white' : 'bg-red-800 text-white'} text-xs font-bold px-4 py-1 rounded-full`}>
                                    {findFriend.status}
                                </span>
                            </div>

                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-2">
                            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white  rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition">
                                <FaBell /> Snooze 2 Weeks
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white  rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition">
                                <FaArchive /> Archive
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white  rounded-lg text-sm font-semibold text-red-500 hover:bg-red-50 transition">
                                <FaTrashAlt /> Delete
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Stats and Goals */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Top Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm  text-center">
                                <h3 className="text-3xl font-bold text-green-700">{findFriend.days_since_contact}</h3>
                                <p className="text-xs text-gray-400 mt-1">Days Since Contact</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm  text-center">
                                <h3 className="text-3xl font-bold text-green-700">{findFriend.goal}</h3>
                                <p className="text-xs text-gray-400 mt-1">Goal (Days)</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm  text-center">
                                <h3 className="text-xl font-bold text-green-800 mt-2">{findFriend.next_due_date}</h3>
                                <p className="text-xs text-gray-400 mt-1">Next Due</p>
                            </div>
                        </div>

                        {/* Relationship Goal Section */}
                        <div className="bg-white p-6 rounded-xl shadow-sm ">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="font-bold text-gray-700">Relationship Goal</h4>
                                <button className="px-4 py-1 text-sm  rounded-md text-gray-600 hover:bg-gray-50">Edit</button>
                            </div>
                            <p className="text-gray-600">Connect every <span className="font-bold text-gray-800">{findFriend.goal} days</span></p>
                        </div>

                        {/* Quick Check-In Section */}
                        <div className="bg-white p-6 rounded-xl shadow-sm ">
                            <h4 className="font-bold text-gray-700 mb-6">Quick Check-In</h4>
                            <div className="grid grid-cols-3 gap-4">
                                <button className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition  -transparent hover:-blue-100">
                                    <FaPhoneAlt className="text-gray-600" />
                                    <span className="text-sm font-medium">Call</span>
                                </button>
                                <button className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition  -transparent hover:-blue-100">
                                    <FaCommentDots className="text-gray-600" />
                                    <span className="text-sm font-medium">Text</span>
                                </button>
                                <button className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition  -transparent hover:-blue-100">
                                    <FaVideo className="text-gray-600" />
                                    <span className="text-sm font-medium">Video</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;