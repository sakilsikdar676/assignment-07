import React, { useEffect, useState } from 'react';

const useFriendsdata = () => {

    const [friends ,setfriends] = useState([])
    const [loading ,setloading] = useState(true)

    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch ('/data.json')
            const data = await res.json()
            setfriends(data)
            setloading(false)

         
        }
        fetchData()

    },[])
    return {friends,loading};
};

export default useFriendsdata;