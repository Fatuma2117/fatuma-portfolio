import "./LandingImg.css";
import IntroImg from "../images/harddrive.jpg"
import React from 'react'
import { Link } from "react-router-dom";

const LandingImg = () => {
  return (
    <div className="landing">
    <div className="mask">
      <img className="into-img"
      src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="context">
      <p> Hello, I'm Fatuma </p>
      <h1>Full Stack Developer.</h1>
      <div>
        <Link></Link>
      </div>
    </div>
    </div>
  )
}

export default LandingImg;