import React from "react";
import { Route, Routes } from "react-router-dom";
import CardPage from "../components/CardPage";
import Home from "../components/Home";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:title" element={<CardPage />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
