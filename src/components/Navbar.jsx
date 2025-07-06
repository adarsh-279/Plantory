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
      className="w-full h-20 px-10 py-3 bg-[#3E4E2C] text-white border-b-4 border-[#273A12] flex items-center justify-between font-[Tothepoint]"
    >
      <div className=" flex items-center gap-5">
        <ImLeaf className="w-12 h-6" />
        <h1 className="text-3xl pt-2">Plantory</h1>
      </div>

      <div className="w-1/2 text-3xl pt-2 flex items-center justify-evenly">
        <ul className="flex flex-row items-center justify-center gap-15">
          <NavLink to="">
            <li>Home</li>
          </NavLink>
          <NavLink to="/category">
            <li>Category</li>
          </NavLink>
          <NavLink to="/tips">
            <li>Tips</li>
          </NavLink>
        </ul>
      </div>

      <div className="flex items-center gap-5">
        <FaHeart className="w-12 h-6" />
        <FaUserAlt className="w-12 h-6" />
      </div>
    </motion.div>
  );
};

export default Navbar;