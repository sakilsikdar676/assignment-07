import React from 'react';
import { Home, ArrowLeft, Settings } from 'lucide-react';
import { useNavigate } from 'react-router';

const ErrorElement = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 font-sans overflow-hidden">
      
      {/* Background Subtle Gears */}
      <div className="absolute top-[10%] left-[10%] opacity-[0.03] animate-spin-slow">
        <Settings size={180} />
      </div>
      <div className=" absolute top-[10%] right-[10%] opacity-[0.03] animate-spin-slow">
        <Settings size={180}/>
      </div>
      <div className="absolute bottom-[10%] right-[10%] opacity-[0.03] animate-reverse-spin">
        <Settings size={220} />
      </div>
      <div className="absolute bottom-[10%] left-[10%] opacity-[0.03] animate-reverse-spin">
        <Settings size={220} />
      </div>

      <div className="relative flex flex-col items-center w-full max-w-5xl">
        
        {/* Error Badge */}
        <div className="bg-[#FF0000] text-white px-8 py-1 rounded-full text-[13px] font-black tracking-widest mb-6">
          ERROR
        </div>

        <div className="flex items-center justify-center w-full relative">
          
          

          {/* 404 & Line */}
          <div className="flex flex-col items-center z-10">
            <h1 className="text-[140px] md:text-[220px] font-black text-[#1A1F2B] leading-none tracking-tighter">
              404
            </h1>
            <div className="w-full h-1.5 bg-[#1A1F2B] -mt-1"></div>
          </div>

          
          
        </div>

        {/* Status Text */}
        <h2 className="text-3xl md:text-5xl font-black text-[#1A1F2B] mt-8 uppercase tracking-tighter">
          PAGE NOT FOUND
        </h2>

        {/* Buttons */}
        <div className="flex flex-row gap-5 mt-14">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-10 py-3.5 bg-white border-2 border-black text-black font-black rounded-lg hover:bg-gray-50 transition-all"
          >
            <ArrowLeft size={20} strokeWidth={3} />
            GO BACK
          </button>
          
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-10 py-3.5 bg-[#1A1F2B] text-white font-black rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.2)] hover:bg-black transition-all"
          >
            <Home size={20} strokeWidth={3} />
            BACK TO HOME
          </button>
        </div>

        {/* Small Note */}
        <p className="mt-16 text-gray-400 text-sm italic font-semibold">
          Ops! The page you're looking for doesn't exist or was moved.
        </p>
      </div>

      <style jsx>{`
        .animate-spin-slow { animation: spin 20s linear infinite; }
        .animate-reverse-spin { animation: spin-reverse 25s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
      `}</style>
    </div>
  );
};

export default ErrorElement;