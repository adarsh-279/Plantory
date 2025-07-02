import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CardComponent from './components/CardComponent'
import Banner from './components/Banner'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <CardComponent />
      <Banner />
    </>
  )
}

export default App