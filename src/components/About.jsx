import React from 'react'
import { Navbar } from './Navbar/Navbar';
import Footer from './Footer/Footer';
import MainImg from './MainImg/MainImg';


const About = () => {
  return (
    <div>
      <Navbar/>
      <MainImg heading="About." text="Full Stack Developer and World Traveler!"/>
      <Footer/>
     </div>
  )
}

export default About;