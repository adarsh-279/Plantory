import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Tips from '../components/Tips'
import CardComponent from '../components/CardComponent'
import Footer from '../components/Footer'
import Indoor from '../components/plants/Indoor'
import Outdoor from '../components/plants/Outdoor'
import Medicinal from '../components/plants/Medicinal'
import Flowering from '../components/plants/Flowering'
import Decorative from '../components/plants/Decorative'
import LowMaintenance from '../components/plants/LowMaintenance'
import PetFriendly from '../components/plants/PetFriendly'
import RareExotic from '../components/plants/RareExotic'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/category" element={<CardComponent />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/Indoor" element={<Indoor />} />
        <Route path="/Outdoor" element={<Outdoor />} />
        <Route path="/Medicinal" element={<Medicinal />} />
        <Route path="/Flowering" element={<Flowering />} />
        <Route path="/Decorative" element={<Decorative />} />
        <Route path="/LowMaintenance" element={<LowMaintenance />} />
        <Route path="/Pet-Friendly" element={<PetFriendly />} />
        <Route path="/RareExotic" element={<RareExotic />} />
      </Routes>
    </>
  );
}

export default Routing