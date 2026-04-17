import React, { useState } from "react";
import { FriendsContext } from "./friendsContext";



export const FriendsContextProvider = ({ children }) => {

const [callFriend, setCallFriend] = useState([])
const [textFriend, setTextFriend] = useState([])
const [videocallFriend, setVideoCallFriend] = useState([])
  

  const data = {
    callFriend,
    setCallFriend,
    textFriend,
    setTextFriend,
    videocallFriend,
    setVideoCallFriend,
  };

    return (
        <FriendsContext.Provider value={data}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsContextProvider;