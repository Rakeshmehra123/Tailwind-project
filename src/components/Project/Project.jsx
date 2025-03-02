import React from "react";
import { Link } from "react-router";

const Project = () => {
  return (
    <div>
     
      <div className="mx-auto">
        <h1 className="text-white ml-20  text-3xl font-md  mt-30 text-amber-100 flex">
          Key logger
        </h1>

        <p className=" text-white  ml-20  text-lg mt-5 m-8 pt-2  text-amber-100 ">
          {" "}
          A Keylogger Project is a web page built using JavaScript HTML css and
          designed to monitor and record the keystrokes made on a computer or
          mobile device. The primary goal is to capture every key press,
          including those from keyboards, virtual keyboards, or other input
          devices.{" "}
        </p>
      </div>
      <div>
        <br></br>
        <Link
          to="https://keystrokelogger.netlify.app/"
          target="_blank"
          className="px-12 mt-5 py-5  ml-20  rounded-2xl bg-gradient-to-r from-green-400 to-lime-600 text-amber-100 font-semibold pointer"
        >
          KeyLogger
        </Link>
      </div>
      <div className="">
        <h1 className="text-white ml-20  text-3xl font-md  mt-30 text-amber-100 flex">
          Signature App
        </h1>

        <p className=" text-white  ml-20  text-lg mt-5 m-8 pt-2  text-amber-100">
          {" "}
          A Signature App built using JavaScript, HTML, and CSS allows users to
          draw and save their digital signature on a web page. This app would
          provide a simple and intuitive interface for users to sign using their
          mouse or touch screen, and store the signature in the browser's local
          storage for later retrieval.{" "}
        </p>
      </div>
      <div>
        <br></br>
        <Link
          to="https://signforauth.netlify.app/"
          target="_blank"
          className="px-12 mt-5 py-5  ml-20  rounded-2xl bg-gradient-to-r from-green-400 to-lime-600 text-amber-100 font-semibold"
        >
          Signature App
        </Link>
      </div>
      <div className="">
        <h1 className="text-white ml-20  text-3xl font-md  mt-30 text-amber-100 flex">
          Typing Test App
        </h1>

        <p className=" text-white  ml-20  text-lg mt-5 m-8 pt-2  text-amber-100">
          {" "}
          The Typing Test App is an interactive web-based application designed to help users monitor and improve their typing speed and accuracy. Built using HTML, CSS, and JavaScript, the app features a user-friendly interface that tests typing skills with real-time feedback. The app tracks key metrics such as Words Per Minute (WPM), Characters Per Minute (CPM), and Time Left, along with error detection to help users identify and correct mistakes while typing.{" "}
        </p>
      </div>
      <div>
        <br></br>
        <Link
          to="https://typingtestforfun.netlify.app/"
          target="_blank"
          className="px-12 mt-5 py-5  ml-20  rounded-2xl bg-gradient-to-r from-green-400 to-lime-600 text-amber-100 font-semibold"
        >
          Typing Test App
        </Link>
      </div>
    </div>
  );
};

export default Project;
