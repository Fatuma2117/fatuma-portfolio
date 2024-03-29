import "./LandingImg.css";
import IntroImg from "../images/harddrive.jpg"
import React from 'react'
import { Link } from "react-router-dom";

const LandingImg = () => {
  return (
    <div className="landing">
    <div className="Img">
      <img className="into-img"
      src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
      <p> Hello, I'm Fatuma Abdi </p>
      <h1>Full Stack Developer.</h1>
      <div>
        <Link to="/project" 
        className="btn"> 
        Projects</Link>
          <Link to="/about" 
        className="btn-clear">About</Link>
      </div>
    </div>
    </div>
  )
}

export default LandingImg;