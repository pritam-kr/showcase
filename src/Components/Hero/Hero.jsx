import React, { useState } from "react";
import { SOCIAL_LINKS, SKILLS } from "../constant";
import "./Hero.css";

const Hero = () => {



  return (
    <div className="common_padding hero_section">
      <div className="hero_section_content">
        <h1 className="text-h1 hi_text">Hi, 👋</h1>
        <h1 className="text-h2 title">I'm a Front-end Developer.</h1>
        <p className="paragraph text-left bio text-lg">
          As a front-end developer, I am passionate about creating user-friendly
          and visually appealing websites and applications. With a deep
          understanding of HTML, CSS, and JavaScript, I am able to bring my
          clients' ideas to life by transforming their visions into functional
          and elegant designs.
        </p>
        <h2 className="text-h3 title">My experince</h2>
        <p className="paragraph text-left bio text-lg">
          Front-end developer at{" "}
          <span className="highlight_text">Ringover</span>, with primary focus
          on ReactJs, JavaScript, React Query.{" "}
          <span className="grey-text duration ">
            {" "}
            19th September 2022 - Present
          </span>
        </p>

        <h2 className="text-h3 title">Skills, I know</h2>
        <div className="skills_wrapper">
          {SKILLS.map((skill) => (
            <li className="text-lg skills" title={skill.label}>
             <img src={skill.icon} alt=""/>
             {skill.icon}
            </li>
          ))}
        </div>

        <div className="hero_scoial_icon">
          {SOCIAL_LINKS.map((social) => (
            <button
              className="btn btn-primary-outline btn_link"
              onClick={() => window.open(social.link, "_blank")}
            >
              {social.icon} {social.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
