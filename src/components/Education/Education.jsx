import React from "react";
import "./Education.css";

// using props to pass data down to a child component

export default function Education(ed) {
  return (
    <div>
      <div className="SectionEd">
        <div className="educationSection">
          <h1 style={{ marginBottom: "-5px" }}>EDUCATION</h1>
          <h2 style={{ marginBottom: "-15px" }}>
            {ed.education.school1.bootCamp}
          </h2>
          <h3 style={{ marginBottom: "-10px" }}>
            {ed.education.school1.teacher}
          </h3>
          <p style={{ marginBottom: "-5px" }}>09/2021 - Present</p>
          <p>courses</p>
          <div className="task">
            <ul className="ed-left">
              <li>{ed.education.school1.task1}</li>
              <li>{ed.education.school1.task2}</li>
            </ul>
            <ul className="ed-right">
              <li>{ed.education.school1.task3}</li>
              <li>{ed.education.school1.task4}</li>
            </ul>
          </div>
          <h2 style={{ marginBottom: "-15px" }}>
            {ed.education.school2.bootCamp}
          </h2>
          <h3 style={{ marginBottom: "-10px" }}>
            {ed.education.school2.teacher}
          </h3>
          <p style={{ marginBottom: "-5px" }}>09/2021 - Present</p>
          <p>courses</p>
          <div className="task">
            <ul className="ed-left">
              <li>{ed.education.school2.task1}</li>
              <li>{ed.education.school2.task2}</li>
            </ul>
            <ul className="ed-right">
              <li>{ed.education.school2.task3}</li>
              <li>{ed.education.school2.task4}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
