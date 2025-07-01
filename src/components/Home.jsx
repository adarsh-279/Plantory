import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="w-full h-[89vh] bg-[#3E4E2C]">
      <div className="w-1/2 h-full flex items-center flex-col pt-30 pl-13 gap-10">
        <h1 className="text-8xl text-white font-[LoveDays]">
          Helping Gardens Speak, One Story at a Time. 🌿✨
        </h1>
        <button className="px-6 py-4 bg-[#F9A826] rounded-2xl -ml-140 flex items-center">
          Explore <FaArrowRightLong className="ml-5 mt-1" />
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Home;