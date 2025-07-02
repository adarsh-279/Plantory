import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CardComponent from './components/CardComponent'
import Banner from './components/Banner'
import Tips from './components/Tips'
import PreFooter from './components/PreFooter'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <CardComponent />
      <Banner />
      <Tips />
      <PreFooter />
      <Footer />
    </>
  )
}

export default App