import React from "react";
import  {Navbar } from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import MainImg  from "./MainImg/MainImg";
import Work from "./Work";

const Project = () => {
  return (
    <div>
   <Navbar/>
   <MainImg heading="Projects" text="Some of my most recent work"/>
   <Work/>
   <Footer/>
 
    </div>
  );
};

export default Project;
