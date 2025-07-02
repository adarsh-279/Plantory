import React from 'react'
import { FaHeart } from "react-icons/fa";

const PreFooter = () => {
  return (
    <div className="w-full h-full flex flex-row px-5 bg-[#FAF9F6] pt-40 pb-2">
      <h1 className="flex items-center gap-2 text-6xl italic opacity-8">
        Made with love <FaHeart />
      </h1>
    </div>
  );
}

export default PreFooter