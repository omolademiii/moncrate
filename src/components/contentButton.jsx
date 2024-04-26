import React from 'react'
import { TbPlayerPlay } from "react-icons/tb";
import PlayPauseBtn from './playPauseButton';


const contentButton = () => {
    return (
        <button className="bg-green-800 hover:bg-white text-white hover:text-black font-bold py-3 px-8 inline-flex items-center">
          <TbPlayerPlay />
          Listen Now
          {/* <PlayPauseBtn /> */}
        </button>
      );
}

export default contentButton
