import  "../WorkCard/WorkCard.css"
import BBCover from "../images/BBCover.png"
import React from 'react'
import WorkCard from "./WorkCard/WorkCard";
import ProjectCardData from "./ProjectData";

const Work = () => {
    // const history = useHistory();
  return (
    <div className="work-container">
        <h1 className="project-heading"> Projects</h1>
        <div className="project-container">
            {ProjectCardData.map((val,i)=>{
                return(
                    <WorkCard
                    key={i}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}/>
                )
            })}
        </div>
    </div>
  )
}

export default Work;