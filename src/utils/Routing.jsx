import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Tips from '../components/Tips'
import CardComponent from '../components/CardComponent'
import Footer from '../components/Footer'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CardComponent/>} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </>
  );
}

export default Routing