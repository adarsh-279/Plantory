import React from 'react'
import LocomotiveScroll from "locomotive-scroll";
import Navbar from './components/Navbar'
import Home from './components/Home'
import CardComponent from './components/CardComponent'
import Banner from './components/Banner'
import Tips from './components/Tips'
import PreFooter from './components/PreFooter'
import Footer from './components/Footer'
import Routing from './utils/Routing';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navbar />
      <Routing />
      <CardComponent />
      <Banner />
      <Tips />
      <PreFooter />
      <Footer />
    </>
  );
}

export default App