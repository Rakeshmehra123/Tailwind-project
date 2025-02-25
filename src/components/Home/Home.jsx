import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <div className="relative flex items-center space-x-4">
        <img
          src="./src/assets/picture.jpg"
          alt="pic"
          className='"w-90 h-90 object-cover absolute flex ml-200 mt-150 rounded-4xl'
        ></img>
      </div>
      <div className="">
        <h1 className="text-white text-5xl font-md ml-50 mt-30 text-amber-100 flex">
          Software Developer
        </h1>

        <p className=" text-white text-lg mt-5 m-8 pt-2 ml-50 text-amber-100">
          {" "}
          Hi, I'm Rakesh Mehra A passionate software developer <br></br>with a
          focus on creating innovative and efficient solutions.<br></br> I
          specialize in html, css, javascript, reactjs etc, <br></br>and I
          thrive on solving complex problems and <br></br>building scalable
          applications.{" "}
        </p>
      </div>
      <div>
        <Link
          to="/Project"
          className="px-12 py-5  ml-50 rounded-2xl bg-green-600 text-amber-100 pointer"
        >
          let's get started
        </Link>
      </div>
    </div>
  );
};

export default Body;
