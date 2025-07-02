import React from "react";
import { ImLeaf } from "react-icons/im";

const Footer = () => {
  return (
    <div className="w-full h-40 px-4 py-3 bg-[#3E4E2C]">
      <div className="w-full h-full flex flex-row items-center justify-between">
        <div className="w-1/3 h-full px-5 gap-2 flex flex-row items-center text-white font-[Tothepoint]">
          <ImLeaf className="w-22 h-11" />
          <h1 className="text-6xl pt-5">Plantory</h1>
        </div>
        <div className="w-1/3 h-full"></div>
        <div className="w-1/3 h-full"></div>
      </div>
    </div>
  );
};

export default Footer;
