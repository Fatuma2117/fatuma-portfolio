import React from 'react'
import { Navbar } from './Navbar/Navbar';
import LandingImg from './LandingImg/LandingImg';
import Footer from './Footer/Footer'
import WorkCard from './WorkCard/WorkCard';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <LandingImg/>
      <WorkCard/>
      <Footer/>
      </div>
  )
}

export default Home;