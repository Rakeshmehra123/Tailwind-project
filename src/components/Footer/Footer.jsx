import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { AiTwotoneHome } from "react-icons/ai";
import { GoProjectSymlink } from "react-icons/go";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-35 ml-50 text-amber-100 font medium bg-stone-600 mr-50 px-8 py-5 rounded-2xl">
      <ul className="flex justify-between px-5 gap-4 font-semibold">
        <li className="hover:bg-cyan-200 p-3 hover:text-black rounded-lg text-white ">
          <Link to="/">
            <AiTwotoneHome />
          </Link>
        </li>
        <li className="hover:bg-cyan-200 p-3 hover:text-black  rounded-lg text-white">
          <Link to="/Project">
            <GoProjectSymlink />
          </Link>
        </li>

        <li className="p-3 hover:bg-cyan-200 p-2 hover:text-black  rounded-lg text-white">
          <Link
            className={() =>
              `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
            to="https://www.linkedin.com/in/rakesh-mehra-356a6b222/"
            target="_blank"
          >
            <BsLinkedin />
          </Link>{" "}
        </li>
        <li className="p-3 hover:bg-cyan-200 p-2 hover:text-black  rounded-lg text-white">
          <Link
            to="https://github.com/Rakeshmehra123"
            target="_blank"
            className={() =>
              `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            <SiGithub />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
