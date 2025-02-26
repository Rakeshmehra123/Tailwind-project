import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { AiTwotoneHome } from "react-icons/ai";
import { GoProjectSymlink } from "react-icons/go";
import { Link, NavLink } from "react-router";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <nav className="bg-stone-600 py-2 rounded-2xl  text-amber-50   ">
        <h1 className=" md:font-semibold font-size-2xl sm:text-sm px-2 ml-2">
          Hi, i m Rakesh Mehra
        </h1>

        <div className="justify-end flex mr-4 md:hidden">
          
            <FaBars />
          
        </div>
        <div className="  hidden sm:block ">
          <ul className="flex justify-end px-5 gap-4 font-semibold no-underline ">
            <li className="hover:bg-cyan-200 p-3 hover:text-black rounded-lg text-white">
              <NavLink
                to="/"
                className={() =>
                  `block py-2 pr-4 pl-3 duration-200  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:bg-cyan-200 p-3 hover:text-black  rounded-lg text-white">
              <NavLink
                to="/Project"
                className={() =>
                  `block py-2 pr-4 pl-3 duration-200  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Project
              </NavLink>
            </li>

            <li className="p-3 hover:bg-cyan-200 p-2 hover:text-black  rounded-lg text-white">
              <NavLink
                className={() =>
                  `block py-2 pr-4 pl-3 duration-200  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
                to="https://www.linkedin.com/in/rakesh-mehra-356a6b222/"
                target="_blank"
              >
                Linkdln
              </NavLink>{" "}
            </li>
            <li className="p-3 hover:bg-cyan-200 p-2 hover:text-black  rounded-lg text-white">
              <NavLink
                to="https://github.com/Rakeshmehra123"
                target="_blank"
                className={() =>
                  `block py-2 pr-4 pl-3 duration-200  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Github
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
