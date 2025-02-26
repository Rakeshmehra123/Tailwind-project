import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div>
     <div className=" flex items-center space-x-4 hidden sm:block">
        <img
          src="./src/assets/picture.svg"
          alt="pic"
          className='"w-90 h-90 object-cover absolute left-200  order-2 rounded-4xl'
        ></img>
      </div>
      <div className="mx-auto relative order-1 ">
        <h1 className="text-white ml-20  text-5xl font-md  mt-30 text-amber-100 flex">
          Software Developer
        </h1>

        <p className=" text-white  ml-20  text-lg mt-5 m-8 pt-2  text-amber-100">
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
          className="px-12 mt-5 py-5  ml-20  rounded-2xl bg-green-600 text-amber-100 pointer"
        >
          let's get started
        </Link>
      </div>
    </div>
  );
};

export default Body;
