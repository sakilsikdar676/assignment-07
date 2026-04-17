import React, { use } from 'react';
import Heading from './HomePage/Heading';
import AllFriends from './HomePage/AllFriends';


const Home = ({friendsDatas}) => {
    
    console.log(friendsDatas);

    const friendsData = use(friendsDatas);
    
    return (
        <div>
            <Heading />
            <AllFriends
            friendsData={friendsData}
            />
        </div>
    );
};

export default Home;