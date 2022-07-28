import  "../WorkCard/WorkCard.css"
import BBCover from "../images/BBCover.png"
import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom";

const WorkCard = () => {
    // const history = useHistory();
  return (
    <div className="project-container">
    <div className="project-card">
        <img src={BBCover} alt="image"/>
        <h2 className="title">Book Buddy Tracker</h2>
        <div className="details">
            <p> This is BB details</p>
            <div className="pro-btn">
            <a className="btn" href="https://young-river-71141.herokuapp.com/" >View</a>
            <a className="btn-clear" href="https://github.com/Fatuma2117/Book-Buddy" >Source</a>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default WorkCard