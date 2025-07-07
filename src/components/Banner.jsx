import React from "react";
import { FaArrowTurnDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-[#FAF9F6] pt-20 lg:pt-30">
      <div className="w-full h-full px-10 py-15  bg-[#3E4E2C] flex items-center justify-between flex-col lg:flex-row">
        <h1 className="text-white text-8xl lg:text-9xl w-full lg:w-1/3 lg:mt-10 lg:pl-10 mb-6 lg:mb-0 font-[Tothepoint] tracking-normal leading-20 lg:leading-25 text-center">
          Grow Plant For A Better Life
        </h1>
        <div className="w-70 h-70 bg-white rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1662577619268-e39b3698dcb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fDRrJTIwcGxhbnQlMjBwb3QlMjBpbWFnZXxlbnwwfDJ8MHx8fDA%3D"
            alt="https://images.unsplash.com/photo-1663573187170-916ba6fc8217?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjBwbGFudCUyMHBvdCUyMGltYWdlfGVufDB8MnwwfHx8MA%3D%3D"
          />
        </div>
        <div className="w-[90%] lg:w-1/3">
          <p className="text-white lg:w-[80%] mt-12 lg:mt-5 text-2xl text-center lg:text-left">
            Plantory helps you grow healthier, happier spaces with expert tips
            and care guides. From indoor to herbal plants, start your green
            journey today.
          </p>
          <motion.button
            whileHover={{ scale: 0.9 }}
            className="px-6 py-4 mt-15 ml-17 lg:ml-0 bg-[#F9A826] rounded-2xl flex items-center"
          >
            Explore Below <FaArrowTurnDown className="ml-5 mt-1" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;