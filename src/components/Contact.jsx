import React from 'react'
import { Navbar } from './Navbar/Navbar';
import Footer from './Footer/Footer'
import MainImg from './MainImg/MainImg'
import { Form } from './Form';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <MainImg heading="Contact" text="Let's have a chat!"/>
      <Form/>
      <Footer/>
     </div>
  )
}

export default Contact;