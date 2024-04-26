import React from 'react';
import { SiPlayerfm } from "react-icons/si";
import { FaBandcamp, FaSoundcloud, FaApple, FaYoutube, FaSpotify } from "react-icons/fa";

const StreamList = () => {
  return (
    <div className='flex py-9 px-2 ml-10'>
      <div className="flex gap-x-2 border-l border-r border-t border-b border-gray-400 py-6 px-5 group">
        <SiPlayerfm className="text-3xl" />
        <h1 className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Player</h1>
      </div>
      <div className="border-l border-r border-t border-b border-gray-400 py-6 px-5">
        <FaBandcamp className="text-3xl" />
      </div>
      <div className="border-l border-r border-t border-b border-gray-400 py-6 px-5">
        <FaSoundcloud className="text-3xl" />
      </div>
      <div className="border-l border-r border-t border-b border-gray-400 py-6 px-5">
        <FaApple className="text-3xl" /> 
      </div>
      <div className="border-l border-r border-t border-b border-gray-400 py-6 px-5">
        <FaYoutube className="text-3xl" />
      </div>
      <div className="border-l border-r border-t border-b border-gray-400 py-6 px-5">
        <FaSpotify className="text-3xl" />
      </div>
    </div>
  );
}

export default StreamList;
