import  "../WorkCard/WorkCard.css"

import React from 'react'


const WorkCard = (props) => {
    // const history = useHistory();
  return (
    <div className="project-container">
    <div className="project-card">
        <img className="top" src={props.imgsrc} alt=""/>
        <h2 className="title">{props.title}</h2>
        <div className="details">
            <p> {props.text}</p>
            <div className="pro-btn">
            <a className="btn" href={props.view} >View</a>
            <a className="btn-clear" href={props.source}>Source</a>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default WorkCard;