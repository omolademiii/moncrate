import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SiPlayerfm } from "react-icons/si";

const SocialIcons = () => {
  return (
    <ul className='social-icons gap-y-6 mt-4'>
      <li>
        <span className="group">
          <FaInstagram className="tooltip" title="Instagram" />
          <span className="hidden group-hover:block bg-black text-white text-sm rounded-lg p-1 absolute bottom-full left-1/2 transform -translate-x-1/2">Instagram</span>
        </span>
      </li>
      <li>
        <span className="group">
          <FaTiktok className="tooltip" title="TikTok" />
          <span className="hidden group-hover:block bg-black text-white text-sm rounded-lg p-1 absolute bottom-full left-1/2 transform -translate-x-1/2">TikTok</span>
        </span>
      </li>
      <li>
        <span className="group">
          <FaTwitter className="tooltip" title="Twitter" />
          <span className="hidden group-hover:block bg-black text-white text-sm rounded-lg p-1 absolute bottom-full left-1/2 transform -translate-x-1/2">Twitter</span>
        </span>
      </li>
      <li>
        <span className="group">
          <FaTwitch className="tooltip" title="Twitch" />
          <span className="hidden group-hover:block bg-black text-white text-sm rounded-lg p-1 absolute bottom-full left-1/2 transform -translate-x-1/2">Twitch</span>
        </span>
      </li>
      <li>
        <span className="group">
          <FaFacebook className="tooltip" title="Facebook" />
          <span className="hidden group-hover:block bg-black text-white text-sm rounded-lg p-1 absolute bottom-full left-1/2 transform -translate-x-1/2">Facebook</span>
        </span>
      </li>
      <li>
        <span className="group">
          <FaDiscord className="tooltip" title="Discord" />
          <span className="hidden group-hover:block bg-black text-white text-sm rounded-lg p-1 absolute bottom-full left-1/2 transform -translate-x-1/2">Discord</span>
        </span>
      </li>
      <li>
        <span className="group">
          <SiPlayerfm className="tooltip" title="PlayerFM" />
          <span className="hidden group-hover:block bg-black text-white text-sm rounded-lg p-1 absolute bottom-full left-1/2 transform -translate-x-1/2">PlayerFM</span>
        </span>
      </li>
    </ul>
  );
};

export default SocialIcons;

