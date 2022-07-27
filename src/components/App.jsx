
import './App.css';
import React from "react";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import { Route, Routes } from "react-router-dom";
import  {Navbar } from "./Navbar/Navbar";

import Footer from "./Footer/Footer";

function App() {
  return (
  <>
  <Navbar/>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     

<Footer/>
  </>
  );
}

export default App;