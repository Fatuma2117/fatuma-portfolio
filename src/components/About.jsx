import React from 'react'
import { Navbar } from './Navbar/Navbar';
import Footer from './Footer/Footer';
import MainImg from './MainImg/MainImg';
import { AboutContent } from './AboutContent';


const About = () => {
  return (
    <div>
      <Navbar/>
      <MainImg heading="About." text=""/>
      <AboutContent/>
      <Footer/>
     </div>
  )
}

export default About;