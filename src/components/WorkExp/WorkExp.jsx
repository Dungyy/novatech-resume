import React from "react";
import "./WorkExp.css";

// Below is grabbing data from Linkdata.
import { WorkExp } from "../../data/Linkdata";
import { Projects } from "../../data/Linkdata";
import { extraExp } from "../../data/Linkdata";

// Used WorkExp to pass data down , and regular jsx

export default function Body() {
  return (
    <div className="Section3">
      <div className="experienceSection">
        <div className="experienceTitle">
          <h1 style={{ marginBottom: "-5px" }}>WORK EXPERIENCE</h1>
          <h3 style={{ marginBottom: "-15px" }}>{WorkExp.position}</h3>
          <h3 style={{ marginBottom: "-10px" }}>{WorkExp.role}</h3>
          <p style={{ marginBottom: "-5px" }}>09/2021 - Present</p>
          <p>Achievements/Tasks</p>
        </div>
        <div className="tasks">
          <ul>
            <li>{WorkExp.tasks.taskOne}</li>
            <li>{WorkExp.tasks.taskTwo}</li>
            <li>{WorkExp.tasks.taskThree}</li>
            <li>{WorkExp.tasks.taskFour}</li>
            <li>{WorkExp.tasks.taskFive}</li>
            <li>{WorkExp.tasks.taskSix}</li>
          </ul>
        </div>
      </div>
      <div className="experienceSection-child">
        <h1>SKILLS</h1>
        <div className="Taglist">
          {WorkExp.skills.map((skill) => (
            <div className="tag" key={skill}>
              <button>{skill}</button>
            </div>
          ))}
        </div>

        <>
          <div className="projectList">
            <h1 style={{ marginBottom: "-17px" }}>PROJECTS</h1>
            <h3 style={{ marginBottom: "-35px" }}>{Projects.project1.name}</h3>
            <p>
              <a href={Projects.project1.link}>- {Projects.project1.link}</a>
            </p>

            <p>- {Projects.project1.frontend}</p>
            <p>- {Projects.project1.backend}</p>
            <h3 style={{ marginBottom: "-35px" }}>{Projects.project2.name}</h3>
            <div className="projects">
              <p>
                <a href={Projects.project2.link}>- {Projects.project2.link}</a>
              </p>
              <p>- {Projects.project2.frontend}</p>
              <p>- {Projects.project2.backend}</p>
            </div>
            <h3 style={{ marginBottom: "-35px" }}>{Projects.project3.name}</h3>
            <div className="projects">
              <p>
                <a href={Projects.project3.link}>- {Projects.project3.link}</a>
              </p>
              <p>- {Projects.project3.frontend}</p>
              <p>- {Projects.project3.backend}</p>
            </div>
          </div>
        </>
        <>
          <div className="projectList">
            <br />
            <h1 style={{ marginBottom: "-35px" }}>CERTIFICATES</h1>
            <h4 style={{ marginBottom: "-35px" }}>
              {extraExp.certificates.cert1}
            </h4>
            <div className="projects">
              <br />
              <h1 style={{ marginBottom: "-35px" }}>ORGANIZATIONS</h1>
              <h4>{extraExp.organizations.name}</h4>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
