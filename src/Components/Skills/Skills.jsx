import React from "react";
import { SKILLS } from "../constant";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="common_padding skills_section">
      <h1 className="text-h1 section_title">Skills</h1>
      <div className="skills_wrapper">
     
        {SKILLS.map((skill) => (
          <li>
             {skill.label}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Skills;
