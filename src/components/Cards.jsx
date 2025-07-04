import React from "react";

const Cards = ({val}) => {
  return (
    <>
      <div className="w-70 h-100 bg-[#E3F2D9] rounded-xl flex flex-col items-center justify-evenly overflow-hidden">
        <img
          className="w-50 h-50 mx-auto rounded-xl bg-white object-cover"
          src={val.image}
          alt=""
        />
        <h1 className="text-3xl text-[#2E2E2E] font-[Poppins]">{val.title}</h1>
        <button className="px-6 py-4 bg-[#6DA34D] rounded-2xl">
          Explore Category
        </button>
      </div>
    </>
  );
};

export default Cards;
