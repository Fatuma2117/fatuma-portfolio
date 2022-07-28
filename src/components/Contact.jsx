import React from 'react'
import { Navbar } from './Navbar/Navbar';
import Footer from './Footer/Footer'
import MainImg from './MainImg/MainImg'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <MainImg heading="Contact" text="Let's have a chat!"/>
      <Footer/>
     </div>
  )
}

export default Contact;