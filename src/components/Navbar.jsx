import React from "react";
import { ImLeaf } from "react-icons/im";
import { FaHeart } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-20 px-3 lg:px-10 py-3 bg-[#3E4E2C] text-white border-b-4 border-[#273A12] flex items-center justify-between font-[Tothepoint]"
    >
      <div className=" flex items-center gap-1 lg:gap-5">
        <ImLeaf className="w-8 h-5 lg:w-12 lg:h-6" />
        <h1 className="text-3xl pt-2">Plantory</h1>
      </div>

      <div className="w-1/2 text-3xl pt-2 flex items-center justify-evenly">
        <ul className="flex flex-row items-center justify-center gap-3 lg:gap-15">
          <NavLink to="">
            <motion.li whileHover={{ scale: 1.12 }}>Home</motion.li>
          </NavLink>
          <NavLink to="/category">
            <motion.li whileHover={{ scale: 1.12 }}>Category</motion.li>
          </NavLink>
          <NavLink to="/tips">
            <motion.li whileHover={{ scale: 1.12 }}>Tips</motion.li>
          </NavLink>
        </ul>
      </div>

      <div className="flex items-center lg:gap-5">
        <FaHeart className="w-8 h-5 mt-2 lg:w-12 lg:h-6" />
        <FaUserAlt className="w-8 h-5 mt-2 lg:w-12 lg:h-6" />
      </div>
    </motion.div>
  );
};

export default Navbar;