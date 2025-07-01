import React from "react";
import Cards from "./Cards";

const CardComponent = () => {
  return (
    <>
      <h1 className="w-full text-9xl px-4 py-3 pt-20 flex items-center justify-center font-[Tothepoint] bg-[#FAF9F6]">
        Plant Categories
      </h1>
      <div className="w-full h-full px-25 py-5 gap-15 bg-[#FAF9F6] flex flex-wrap">
        <Cards />
      </div>
    </>
  );
};

export default CardComponent;
