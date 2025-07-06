import React from "react";

const PlantsDetails = ({ val }) => {
  return (
    <>
      <div className="w-70 h-120 bg-[#E3F2D9] rounded-xl flex flex-col items-center justify-evenly overflow-hidden">
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
      </div>
    </>
  );
};

export default PlantsDetails;
