import React from "react";
import { ImLeaf } from "react-icons/im";

const Footer = () => {
  return (
    <div className="w-full h-40 px-4 py-3 bg-[#3E4E2C] text-white ">
      <div className="w-full h-full flex flex-row items-center justify-between">
        <div className="w-1/3 h-full px-5 gap-2 flex flex-row items-center font-[Tothepoint]">
          <ImLeaf className="w-22 h-11" />
          <h1 className="text-6xl pt-5">Plantory</h1>
        </div>
        <div className="w-1/3 h-full flex flex-col text-center justify-center">
          <h1 className="mb-3">Socials</h1>
          <div className="flex flex-col  opacity-70">
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
            <a href="#">Facebook</a>
          </div>
        </div>
        <div
          id="contact"
          className="w-1/3 h-full flex flex-col text-center justify-center"
        >
          <h1 className="mb-3">Contacts</h1>
          <div className="flex flex-col  opacity-70">
            <h1>+91 9876543210</h1>
            <h1>contact@plantory.com</h1>
          </div>
        </div>
        <div className="w-1/3 h-full pt-2 flex flex-col items-center justify-evenly opacity-70">
          <a href="#home">Home</a>
          <a href="#category">Category</a>
          <a href="#tips">Tips</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
