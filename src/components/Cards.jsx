import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';

const Cards = ({ val }) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02, boxShadow: "0 5px 5px 5px #00000030" }}
        className="w-46 h-70 lg:w-70 lg:h-100 bg-[#E3F2D9] rounded-xl flex flex-col items-center justify-evenly overflow-hidden border-2 border-[#00000016]"
      >
        <img
          className="w-35 h-35 lg:w-50 lg:h-50 mx-auto rounded-xl bg-white object-cover"
          src={val.image}
          alt=""
        />
        <h1 className="text-2xl lg:text-3xl text-[#2E2E2E] font-[Poppins]">
          {val.title}
        </h1>
        <NavLink
          className="px-4 py-3 lg:px-6 lg:py-4 bg-[#6DA34D] rounded-2xl"
          to={`/${val.title.replace(/[^a-zA-Z0-9-]/g, "")}`}
        >
          Explore Category
        </NavLink>
      </motion.div>
    </>
  );
};

export default Cards;
