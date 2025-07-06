import React from 'react'
import { motion } from "framer-motion";

const Tip = ({val}) => {
    return (
      <>
        <motion.div
          whileHover={{ scale: 1.02, boxShadow: "0 5px 5px 5px #00000030" }}
          className="w-70 h-80 bg-[#E3F2D9] rounded-xl flex flex-col items-center justify-evenly overflow-hidden"
        >
          <div className="w-25 h-25 mx-auto rounded-full bg-white object-cover flex items-center justify-center">
            <h1 className="h-full w-full text-5xl flex items-center justify-center">
              {val.icon}
            </h1>
          </div>
          <h1 className="text-3xl text-[#2E2E2E] font-[Poppins]">
            {val.title}
          </h1>
          <p className="w-[85%] text-center text-[#2e2e2ed3]">{val.tip}</p>
        </motion.div>
      </>
    );
    };

export default Tip