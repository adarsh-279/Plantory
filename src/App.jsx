import React from 'react'
import LocomotiveScroll from "locomotive-scroll";
import Navbar from './components/Navbar'
import PreFooter from './components/PreFooter'
import Footer from './components/Footer'
import Routing from './utils/Routing';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navbar />
      <Routing />
      <PreFooter />
      <Footer />
    </>
  );
}

export default App