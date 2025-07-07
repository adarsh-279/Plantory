import React from "react";
import { FaArrowTurnDown } from "react-icons/fa6";
import CardComponent from "./CardComponent";
import Banner from "./Banner"
import Tips from "./Tips";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        id="home"
        className="w-full h-[77vh] lg:h-[88.8vh] bg-[#3E4E2C] flex"
      >
        <div>
          <div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center flex-col pt-15 lg:pt-30 lg:pl-13 lg:gap-10">
            <h1 className="text-5xl pl-8 lg:text-8xl text-white font-[LoveDays]">
              Helping Gardens Speak, One Story at a Time. 🌿✨
            </h1>
            <motion.button
              whileHover={{ scale: 0.9 }}
              className="px-6 py-4 bg-[#F9A826] rounded-2xl mt-10 lg:-mt-1 lg:-ml-115 flex items-center"
            >
              Explore Below
              <FaArrowTurnDown className="ml-5 mt-1" />
            </motion.button>
          </div>
          <div className="w-full lg:w-1/2 h-auto bottom-0 lg:h-full lg:-mt-162 lg:ml-200">
            <div className="h-[89.5%] w-2/3 mx-auto mt-[9.3%] lg:mt-[9%] bg-[#FAF9F6] rounded-t-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1692604947955-ea7c8e41fa8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fDRrJTIwaW1hZ2UlMjBwbGFudCUyMGF0JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="https://images.unsplash.com/photo-1652377127360-4478a78590a0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE3fHw0ayUyMGltYWdlJTIwcGxhbnQlMjBhdCUyMGhvbWV8ZW58MHx8MHx8fDA%3D"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <CardComponent />
      <Banner />
      <Tips />
    </>
  );
};

export default Home;