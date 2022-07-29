import React from 'react'
import { Navbar } from './Navbar/Navbar';
import LandingImg from './LandingImg/LandingImg';
import Footer from './Footer/Footer'
import Work from './Work';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <LandingImg/>
      <Work/>
      <Footer/>
      </div>
  )
}

export default Home;