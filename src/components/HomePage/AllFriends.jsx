import React from 'react';
import FriendCard from '../FriendCard';

const AllFriends = ({ friendsData }) => {
    return (
        <div className="bg-gray-50 font-sans ">
            <div className="bg-gray-50 font-sans max-w-10/14 mx-auto p-6 ">
                <h1 className='text-2xl text-[#1F2937] font-bold'>Your Friends</h1>
            </div>
            <div className='max-w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                {
                    friendsData.map(friend => <FriendCard key={friend.id} friend={friend} />)
                }

            </div>
        </div>
    );
};

export default AllFriends;