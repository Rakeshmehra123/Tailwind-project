import React from "react";

const Project = () => {
  return (
    <div>
      <div className="relative flex items-center space-x-4">
       {/* <img
          src="./src/assets/picture.svg"
          alt="pic"
          className='"w-90 h-90 object-cover absolute flex ml-200 mt-150 rounded-4xl'
        ></img>*/}
      </div>
      <div className="">
        <h1 className="text-white text-2xl font-md ml-50 mt-10 text-amber-100 flex">
          Key logger
        </h1>

        <p className=" text-white text-lg mt-5  pt-2 ml-50 text-amber-100">
          {" "}
          A Keylogger Project is a web page built using JavaScript HTML css and designed to monitor and record the keystrokes made on a computer or mobile device. The primary goal is to capture every key press, including those from keyboards, virtual keyboards, or other input devices.
          {" "}
        </p>
      </div>
      <div>
        <br></br>
        <a
          href="https://keystrokelogger.netlify.app/" target="_blank"
          className="px-12 py-3 mt-5 ml-50 rounded-2xl bg-gradient-to-r from-green-400 to-lime-600 text-amber-100 pointer"
        >
          KeyLogger
        </a>
      </div>
      <div className="">
        <h1 className="text-white text-2xl font-md ml-50 mt-10 text-amber-100 flex">
          Signature App
        </h1>

        <p className=" text-white text-lg mt-5  pt-2 ml-50 text-amber-100">
          {" "}
          A Signature App built using JavaScript, HTML, and CSS allows users to draw and save their digital signature on a web page. This app would provide a simple and intuitive interface for users to sign using their mouse or touch screen, and store the signature in the browser's local storage for later retrieval.
          {" "}
        </p>
      </div>
      <div>
        <br></br>
        <a
          href="https://signforauth.netlify.app/" target="_blank"
          className="px-12 py-3 mt-5 ml-50 rounded-2xl bg-gradient-to-r from-green-400 to-lime-600 text-amber-100 pointer"
        >
          Signature App
        </a>
      </div>
    </div>  
  );
};

export default Project;