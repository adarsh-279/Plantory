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
        className="w-70 h-120 bg-[#E3F2D9] rounded-xl flex flex-col items-center justify-evenly overflow-hidden"
      >
        <img
          className="w-50 h-50 mx-auto rounded-xl bg-white object-cover"
          src={val.image}
          alt=""
        />
        <h1 className="text-3xl text-[#2E2E2E] font-[Poppins] text-center w-[85%]">
          {val.title}
        </h1>
        <h1 className="w-[85%] text-center">Tips : {val.tips}</h1>
        <h1 className="w-[85%] text-center">Tricks : {val.tricks}</h1>
      </motion.div>
    </>
  );
};

export default PlantsDetails;
