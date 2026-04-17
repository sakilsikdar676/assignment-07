import { useParams } from "react-router";
import { FiArchive, FiPhoneCall } from "react-icons/fi";
import { MdOutlineDeleteForever, MdOutlineNotificationsPaused, MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { useContext } from "react";
import { toast } from "react-toastify";
import useFriendsdata from "../Hooks/useFriendsdata";
import { FriendsContext } from "../context/friendsContext";



const FriendDetails = () => {
  const { id } = useParams();
  const { friends} = useFriendsdata();

const expectedfriend = friends.find((friend) => friend.id === parseInt(id));
    


const {callFriend,setCallFriend,textFriend,setTextFriend,videocallFriend,setVideoCallFriend} = useContext(FriendsContext);



 const getCurrentDateTime = () => {
    return new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      day: "numeric",
      month: "short",
    });
  };

  const handleCallFriend = () => {
    const historyItem = { ...expectedfriend, date: getCurrentDateTime() };
    setCallFriend([...callFriend, historyItem]);
    toast.success(`Call with ${expectedfriend?.name}`);
  };

  const handleTextFriend = () => {
    const historyItem = { ...expectedfriend, date: getCurrentDateTime() };
    setTextFriend([...textFriend, historyItem]);
    toast.success(`Text with ${expectedfriend?.name}`);
  };

  const handleVideoCallFriend = () => {
    const historyItem = { ...expectedfriend, date: getCurrentDateTime() };
    setVideoCallFriend([...videocallFriend, historyItem]);
    toast.success(`Video call with ${expectedfriend?.name}`);
  };
 




    
  return (
    <div>
      <div className="bg-[#f8fafb] min-h-screen">
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
                <img
                  src={expectedfriend?.picture}
                  alt="Emma Wilson"
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />

                <h2 className="text-xl font-bold text-gray-800 mt-4 leading-tight">
                  {expectedfriend?.name}
                </h2>

                <div className="flex flex-col items-center gap-2 mt-3">
                  <div className="card-actions">
          <div className={`badge border-none text-white text-[10px] font-bold py-3.5 px-5 rounded-full uppercase tracking-wider 
            ${expectedfriend?.status === "Overdue" ? "bg-[#EF4444]" : ""}
            ${expectedfriend?.status === "On-Track" ? "bg-[#064E3B]" : ""}
            ${expectedfriend?.status === "Almost Due" ? "bg-[#F59E0B]" : ""}
            
            
            `}>
            {expectedfriend?.status}
          </div>
        </div>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {expectedfriend?.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-400 mt-6 text-sm italic font-medium leading-relaxed">
                  {expectedfriend?.bio}
                </p>

                <p className="text-[11px] text-gray-400 mt-3 tracking-wider">
                  Preferred:{" "}
                  <span className="text-gray-500 font-semibold">{expectedfriend?.email}</span>
                </p>
              </div>

          
              <div className="space-y-3">
                <button className="btn btn-outline w-full bg-white border-gray-200 text-gray-700 normal-case font-bold">
                  <MdOutlineNotificationsPaused size={20} /> Snooze 2 Weeks
                </button>

                <button className="btn btn-outline w-full bg-white border-gray-200 text-gray-700 normal-case font-bold">
                    <FiArchive /> Archive
                </button>

                <button className="btn  w-full bg-white normal-case font-bold border-gray-100">
                  <MdOutlineDeleteForever size={20} className=" text-red-400" /> Delete
                </button>
              </div>
            </div>

          
            <div className="lg:col-span-3 space-y-6">
          
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
                  <h2 className="text-4xl font-bold text-[#1a4d40]">{expectedfriend?.days_since_contact}</h2>
                  <p className="text-gray-400 text-sm mt-3 font-medium">
                    Days Since Contact
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
                  <h2 className="text-4xl font-bold text-[#1a4d40]">{expectedfriend?.goal}</h2>
                  <p className="text-gray-400 text-sm mt-3 font-medium">
                    Goal (Days)
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
                  <h2 className="text-3xl font-bold text-[#1a4d40]">
                  
                    {new Date().toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </h2>
                  <p className="text-gray-400 text-sm mt-3 font-medium">
                    Next Due
                  </p>
                </div>
              </div>

             
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold text-[#1a4d40]">
                    Relationship Goal
                  </h2>
                  <p className="text-gray-500 mt-2 text-base">
                    Connect every{" "}
                    <span className="font-bold text-gray-800">{expectedfriend?.goal} days</span>
                  </p>
                </div>

                <button className="btn btn-ghost border border-gray-200 btn-sm normal-case font-bold text-gray-500 bg-[#fbfcfc]">
                  Edit
                </button>
              </div>

             
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-lg font-bold text-[#1a4d40] mb-8">
                  Quick Check-In
                </h2>

                <div  className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <button onClick={handleCallFriend} className="btn btn-ghost h-auto flex flex-col items-center justify-center border border-gray-50 bg-[#f9fafb] rounded-xl p-8 normal-case">
                    <span className="text-2xl mb-2"><FiPhoneCall /></span>
                    <span className="font-bold text-gray-700">Call</span>
                  </button>

                  <button onClick={handleTextFriend} className="btn btn-ghost h-auto flex flex-col items-center justify-center border border-gray-50 bg-[#f9fafb] rounded-xl p-8 normal-case">
                    <span className="text-2xl mb-2"><MdOutlineTextsms /></span>
                    <span className="font-bold text-gray-700">Text</span>
                  </button>

                  <button onClick={handleVideoCallFriend} className="btn btn-ghost h-auto flex flex-col items-center justify-center border border-gray-50 bg-[#f9fafb] rounded-xl p-8 normal-case">
                    <span className="text-2xl mb-2"><IoVideocamOutline /></span>
                    <span className="font-bold text-gray-700">Video</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;