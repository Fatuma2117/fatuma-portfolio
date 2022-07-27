import React from "react";
import  {Navbar } from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import MainImg  from "./MainImg/MainImg";

const Project = () => {
  return (
    <div>
   <Navbar/>
   <MainImg heading="Projects" text="Some of my most recent work"/>
   <Footer/>
 
    </div>
  );
};

export default Project;
