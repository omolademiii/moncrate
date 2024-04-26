import {  FaApple, FaYoutube, FaSpotify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SiPlayerfm } from "react-icons/si";
import { SiTriller } from "react-icons/si";


const secondFooter = () => {
  return (
    <div className='grid grid-cols-2 gap-6 mt-24 mb-8'>
        <div>
        2011 - 2024 © Monstercat, All Rights Reserved
        </div>
        <div className=' flex  gap-x-7'>
        <FaYoutube />
        <FaInstagram />
        <FaTiktok />
        <FaXTwitter />
        <FaSpotify />
        <FaApple />
        <FaTwitch />
        <FaFacebook />
        <FaDiscord />
        <SiTriller />
        <SiPlayerfm />
        </div>
      </div>
  )
}

export default secondFooter
