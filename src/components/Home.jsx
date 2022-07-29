import React from 'react'
import { Navbar } from './Navbar/Navbar';
import LandingImg from './LandingImg/LandingImg';
import Footer from './Footer/Footer'
import Work from './Work';
import { AboutContent } from './AboutContent';
import{ Form} from "./Form"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <LandingImg/>
      <AboutContent/>
      <Work/>
    <Form/>
      <Footer/>
      </div>
  )
}

export default Home;