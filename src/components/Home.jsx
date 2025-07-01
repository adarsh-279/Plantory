import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="w-full h-[89vh] bg-[#3E4E2C] flex">
      <div className="w-1/2 h-full flex items-center flex-col pt-30 pl-13 gap-10">
        <h1 className="text-8xl text-white font-[LoveDays]">
          Helping Gardens Speak, One Story at a Time. 🌿✨
        </h1>
        <button className="px-6 py-4 bg-[#F9A826] rounded-2xl -ml-140 flex items-center">
          Explore <FaArrowRightLong className="ml-5 mt-1" />
        </button>
      </div>
      <div className="w-1/2 h-full">
        <div className="h-[89%] w-2/3 mx-auto mt-[9%] bg-[#FAF9F6] rounded-t-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1692604947955-ea7c8e41fa8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fDRrJTIwaW1hZ2UlMjBwbGFudCUyMGF0JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="https://images.unsplash.com/photo-1652377127360-4478a78590a0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE3fHw0ayUyMGltYWdlJTIwcGxhbnQlMjBhdCUyMGhvbWV8ZW58MHx8MHx8fDA%3D"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;