import "./AboutContent.css"
import headshot from "./images/headshot.png"

import React from 'react'
import { Link } from "react-router-dom"

export const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p> I am a Full Stack Developer.</p>
  <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>

        </div>
      
        <div className="right">
            <div className="img-container">
                <div className="img-stack">
                    <img src={headshot} alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}
