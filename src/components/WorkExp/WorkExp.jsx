import React from "react";
import "./WorkExp.css";


// Used props to pass data down , and regular jsx

export default function Body(props) {
  // const { position, role, skills, tasks } = WorkExp;
  // const { taskOne, taskTwo, taskThree, taskFour, taskFive, taskSix } = tasks;
  return (
    <div className="Section3">
      <div className="experienceSection">
        <div className="experienceTitle">
          <h1 style={{ marginBottom: "-5px" }}>WORK EXPERIENCE</h1>
          <h3 style={{ marginBottom: "-15px" }}>{props.position}</h3>
          <h3 style={{ marginBottom: "-10px" }}>{props.role}</h3>
          <p style={{ marginBottom: "-5px" }}>09/2021 - Present</p>
          <p>Achievements/Tasks</p>
        </div>
        <div className="tasks">
          <ul>
            <li>{props.tasks.taskOne}</li>
            <li>{props.tasks.taskTwo}</li>
            <li>{props.tasks.taskThree}</li>
            <li>{props.tasks.taskFour}</li>
            <li>{props.tasks.taskFive}</li>
            <li>{props.tasks.taskSix}</li>
          </ul>
        </div>
      </div>
      <div className="experienceSection-child">
        <h1>SKILLS</h1>
        <div className="Taglist">
          {props.skills.map((skill) => (
            <div className="tag" key={skill}>
              <button>{skill}</button>
            </div>
          ))}
        </div>

        <>
          <div className="projectList">
            <h1 style={{ marginBottom: "-17px" }}>PROJECTS</h1>
            <h3 style={{ marginBottom: "-35px" }}>Dungy Chat App</h3>
            <p>
              <a href="https://Dungy-Chat.herokuapp.com">
                - https://Dungy-Chat.herokuapp.com
              </a>
            </p>

            <p>- Frontend: HTML | CSS | JavaScript</p>
            <p>- Backend: NodeJS | ExpressJS | Socket.io</p>
            <h3 style={{ marginBottom: "-35px" }}>Erick's Portfolio</h3>
            <div className="projects">
              <p>
                <a href="https://www.ErickMunoz.Tech">
                  - https://www.ErickMunoz.Tech
                </a>
              </p>
              <p>- Frontend: HTML | CSS | JavaScript | Bootstrap</p>
              <p>- Backend: Python Flask Micro Framework</p>
            </div>
            <h3 style={{ marginBottom: "-35px" }}>Tesla Replica</h3>
            <div className="projects">
              <p>
                <a href="https://Tesla-Replica.herokuapp.com">
                  - https://Tesla-Replica.herokuapp.com
                </a>
              </p>
              <p>- Frontend: ReactJS and CSS Styled Components</p>
              <p>- Backend: React Native</p>
            </div>
          </div>
        </>
        <>
          <div className="projectList">
            <br />
            <h1 style={{ marginBottom: "-35px" }}>CERTIFICATES</h1>
            <h4 style={{ marginBottom: "-35px" }}>
              2022 Web Development Bootcamp (09/2021 - 04/2022)
            </h4>
            <div className="projects">
              <br />
              <h1 style={{ marginBottom: "-35px" }}>ORGANIZATIONS</h1>
              <h4>
                Society of Hispanic Professional Engineers (03/2022 - Present)
              </h4>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
