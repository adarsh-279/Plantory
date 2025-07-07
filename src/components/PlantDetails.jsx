import React from "react";
import { motion } from "framer-motion";

const PlantsDetails = ({ val }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02, boxShadow: "0 5px 5px 5px #00000020" }}
        className="w-46 h-100 lg:w-70 lg:h-120 bg-[#E3F2D9] rounded-xl flex flex-col items-center justify-evenly overflow-hidden border-2 border-[#00000016]"
      >
        <img
          className="w-35 h-35 lg:w-50 lg:h-50 mx-auto rounded-xl bg-white object-cover"
          src={val.image}
          alt=""
        />
        <h1 className="text-2xl lg:text-3xl text-[#2E2E2E] font-[Poppins] text-center w-[85%]">
          {val.title}
        </h1>
        <h1 className="w-[85%] text-sm text-center">Tips : {val.tips}</h1>
        <h1 className="w-[85%] text-sm text-center">Tricks : {val.tricks}</h1>
      </motion.div>
    </>
  );
};

export default PlantsDetails;
