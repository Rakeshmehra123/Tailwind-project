import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { AiTwotoneHome } from "react-icons/ai";
import { GoProjectSymlink } from "react-icons/go";
import { NavLink } from "react-router";
const Header = () => {
  return (
    <div>
      <nav className="bg-stone-600 py-2 rounded-xl ml-30 mr-30 text-amber-50">
        <h1 className="m-2 font-semibold font-size-2xl ">
          Hi, i m Rakesh Mehra
        </h1>
        <ul className="flex justify-end px-5 gap-4 font-semibold">
          <li className="hover:bg-cyan-200 p-3 hover:text-black rounded-lg text-white">
            <NavLink to="/index.html">
              <AiTwotoneHome />
            </NavLink>
          </li>
          <li className="hover:bg-cyan-200 p-3 hover:text-black  rounded-lg text-white">
            <NavLink to="#">
              <GoProjectSymlink />
            </NavLink>
          </li>

          <li className="p-3 hover:bg-cyan-200 p-2 hover:text-black  rounded-lg text-white">
            <NavLink
              to="https://www.linkedin.com/in/rakesh-mehra-356a6b222/"
              target="_blank"
            >
              <BsLinkedin />
            </NavLink>{" "}
          </li>
          <li className="p-3 hover:bg-cyan-200 p-2 hover:text-black  rounded-lg text-white">
            <NavLink to="https://github.com/Rakeshmehra123" target="_blank">
              <SiGithub />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
