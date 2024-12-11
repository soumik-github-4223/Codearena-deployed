'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';




const Navbar = () => {
  const router=useRouter();

  return (
    <div className="bg-gradient-to-r from-[#0E0E0E] via-[#242424] to-[#161616] fixed w-full top-0 z-50">
      <div className="flex justify-between items-center w-full py-3 px-5">
        <div className="flex items-center space-x-4">
          <Image
            src='/Codearena_logo.svg'
            alt='Description of the image'
            width={69}
            height={100}
          />
          {/* Responsive Buttons */}
          <button className="bg-gray-800 border-2 rounded-lg border-[rgba(196,93,60,1)] hover:bg-gray-700 transition duration-300 text-[rgba(118,210,218,1)] font-bold  py-3 px-6 text-sm md:text-base">
            Leaderboard
          </button>
          <button className="bg-gray-800 border-2 rounded-lg border-[rgba(196,93,60,1)] hover:bg-gray-700 transition duration-300 text-[rgba(118,210,218,1)] font-bold  py-3 px-6 text-sm md:text-base">
            Connect
          </button>
          <button onClick={()=>{router.push('/compete/friends')}} className="bg-gray-800 border-2 rounded-lg border-[rgba(196,93,60,1)] hover:bg-gray-700 transition duration-300 text-[rgba(118,210,218,1)] font-bold  py-3 px-6 text-sm md:text-base">
            Compete
          </button>
          <button className="bg-gray-800 border-2 rounded-lg border-[rgba(196,93,60,1)] hover:bg-gray-700 transition duration-300 text-[rgba(118,210,218,1)] font-bold  py-3 px-6 text-sm md:text-base">
            Chat
          </button>
        </div>
        <div className="ml-auto">
          <button onClick={()=>{router.push('/signup')}}  className="bg-gray-800 hover:bg-gray-700 transition duration-300 text-[rgba(118,210,218,1)] font-bold rounded-lg border-2 border-[rgba(196,93,60,1)] py-2 px-6 text-sm md:text-base">
            SignUp/login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
