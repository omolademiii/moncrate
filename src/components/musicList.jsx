import React from 'react';
import musicData from '../music.json'; 
import { TbPlayerPlay } from 'react-icons/tb';
import { FaShareAlt } from "react-icons/fa";


const MusicList = () => {
  return (
    <div className="">
      {musicData.map((music) => (
        <div key={music.id} className="flex justify-between pl-12">
          <div className="text-right flex justify-around items-center gap-x-6">
            <h2 className="text-lg font-bold">{music.title}</h2>
            < TbPlayerPlay />
            <div className='flex flex-col items-center'>
            <p className="text-xl ~ tracking-wider font-bold pt-5">{music.artist}</p>
            <p>conro</p>
            </div>
            
          </div>
          <div className="text-left flex justify-around items-center gap-x-6">
            <p className="text-xl tracking-wider font-bold">{music.duration}</p>
            <FaShareAlt />
            {/* <audio controls className="mt-2">
              <source src={music.link} type="audio/mpeg" />
            </audio> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicList;
