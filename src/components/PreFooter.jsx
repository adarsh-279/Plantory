import React from 'react'
import { FaHeart } from "react-icons/fa";

const PreFooter = () => {
  return (
    <div className="w-full h-full flex flex-row px-5 bg-[#FAF9F6] pt-15 lg:pt-25 pb-2">
      <h1 className="flex items-center gap-2 text-4xl lg:text-6xl italic opacity-8">
        Made with love <FaHeart className='w-8 h-7 lg:w-15 lg:h-10 lg:mt-4' />
      </h1>
    </div>
  );
}

export default PreFooter