import { IoMenu } from "react-icons/io5";
import Logo from "./logo";
import SocialIcons from "./socialIcons";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleMenuBar = () => {
    setIsClicked(!isClicked);
  };
  return (
    <nav className="navigation z-10">
      <div className="container flex items-center justify-between px-5 z-0">
        <Logo />
        <div className="relative z-10">
          <IoMenu onClick={handleMenuBar} className="text-3xl" />
          <div
            className={`w-44 text-center h-auto p-5 bg-white ${
              isClicked ? "block" : "hidden"
            } absolute right-1 z-50`}
          >
            <ul className="w-full flex flex-col gap-8 text-black ">
              <li className="w-full hover:text-red-300">
                <NavLink to="/"> Home </NavLink>
              </li>
              <li className="w-full hover:text-red-300">
                <NavLink to="/aboutus"> About Us </NavLink>
              </li>

              <li className="w-full hover:text-red-300">
                <NavLink to="/contact"> Contact </NavLink>
              </li>
              <li className="w-full hover:text-red-300">
                <NavLink to="/career"> Career </NavLink>
              </li>
              <li className="w-full hover:text-red-300">
                <NavLink to="/news"> New </NavLink>
              </li>
              <li className="w-full hover:text-red-300">
                <NavLink to="/press"> Press </NavLink>
              </li>

              <li className="w-full hover:text-red-300">
                <NavLink to="/privacy"> Privacy </NavLink>
              </li>
            </ul>
          </div>
          <SocialIcons />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
