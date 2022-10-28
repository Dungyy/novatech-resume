import React from "react";
import "./LinkSection.css";
import { Links } from "../../data/Linkdata";

export default function LinkSection() {
  return (
    <div className="Section2">
      {Links.map(({ id, title, visit, icon }) => (
        <div className="linkSection" key={id}>
          <a href={visit} className={icon}>
            {""}
          </a>
          <a href={visit} className="LinkTitle">
            {title}
          </a>
        </div>
      ))}
    </div>
  );
}
