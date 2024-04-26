import React from 'react';
import { TbPlayerPlay } from "react-icons/tb";

const SContentButton = () => {
  return (
    <button className="hover:bg-white text-white hover:text-black font-bold py-3 px-8 border border-white-50 inline-flex items-center">
      <TbPlayerPlay />
      Share Now
    </button>
  );
}

export default SContentButton;

