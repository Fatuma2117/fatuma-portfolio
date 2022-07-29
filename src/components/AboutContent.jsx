import "./AboutContent.css";
import headshot from "./images/headshot.png";

import React from "react";
import { Link } from "react-router-dom";

export const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <h1>About Me</h1>
        <p>
          {" "}
          My passion for traveling and facing a new software problem excite me
          in similar ways, both require me to adapt. From exploring new places
          and communities to figuring out unique ways to solve difficult
          problems; I’ve learned a multitude of new things during my travels to
          sixteen countries in five different continents. Ask me about one of my
          many traveling stories!
        </p>
        <h1>Skills</h1>
        <p>
          {" "}
          Frontend - HTML5 , CSS, JavaScript, React.js, Redux, Sagas,
          TypeScript, jQuery, Material- UI , Bootstrap Backend - .NET, Node.js,
          C#, SQL, Express.js, Postgres, Postman, Rest API’s Tooling - Git,
          Miro, Figma, Trello, Heroku, Agile/Scrum, SDLC
        </p>
        <h1>Experience</h1>
        <h3>
          Prime Digital Academy, Full Stack Software Engineering Student{" "}
        </h3>{" "}
        <p>
          February 2022 – July 2022 Book Buddy - Children’s Book Tracker Project
          ● Developed to help track all the books a child is reading and their
          progress. ● Children can add a new book and edit books, update current
          page number and can also rate completed books. ● Parent’s can monitor
          current page numbers and add new books to specific kids. ●
          Technologies used: JavaScript , React, Sagas, SQL, HTML,CSS, Material
          UI, Node. Living Room Tutors - Client Project ● Living Room Tutors
          offers free online tutoring to K-12 students. We recruit volunteer
          tutors (high school- or college-age) for our virtual tutoring service.
          ● Collaborated with three developers and built a full-stack
          interactive web app with dynamic user capabilities such as scheduling
          sessions, providing additional resources and educational material for
          users, and storing user information, as well as administrative backend
          functionality. ● Technologies used: JavaScript , React, Sagas, SQL,
          Material UI, Node.
        </p>
        <h3>M Health Fairview, Mental Health Associate</h3>
        <p>
          October 2018 – February 2022 ● Evaluated and charted all patients for
          various behavioral health issues and assisted with developing
          appropriate treatment plans. ● Taught behavioral management
          interventions to diverse patients and de-escalated mental health
          crises. ● Communicated with patients and caregivers to handle patient
          registrations, insurance claims, and data reporting. Provided daily
          clerical and administrative assistance as needed.
        </p>
        <h1>Education</h1>
        <h3>
          Prime Digital Academy, Full Stack Software Engineering Certification
        </h3>
        <p>
          ● Technologies - Javascript, React, Redux, Sagas , jQuery , SQL,
          Postgres, HTML, CSS, Bootstrap, Postico, Material UI, Node,
          Express.js, Miro, Figma, Git, Rest API’s, CRUD, Postman, Heroku ●
          Diversity, Equity, and Inclusion training ● Public speaking and
          presentation practice, and real-world client work.
        </p>
        <h3>University of Minnesota, Bachelors of Arts</h3>
        <p>
          May 2018 ● Major - Business Management and Political Science ● CAPA
          London Study Abroad Program ● KenVia Non-Profit Kenyan Volunteer
          Program
        </p>
        <h3>ScrumAlliance Certified ScrumMaster Certification December 2021</h3>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack">
            <img src={headshot} alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};
