import React from "react";
import { PROJECTS } from "../constants";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="project_section">
      <h1 className="text-h1 section_title">Projects</h1>
      <p className="paragraph text-left bio text-lg">
        Some of my cool Projects.
      </p>

      <div className="projects_wrapper">
        {PROJECTS.map((project) => {
          return (
            <div className="project_card">
              <div className="project_cover_img">
                <img
                  src={project.img}
                  alt="reponsive_image"
                  className="responsive-images project_img"
                />
              </div>
              <div className="project_infos">
                <p className="project_stack grey-text">
                  {project.stack.join(", ")}
                </p>
                <h1 className="text-h1 text-xl project_title">{project.title}</h1>
                <p className="paragraph text-left text-lg project_des">
                  {project.description}
                </p>

                <div className="project_footer">
                  <button
                    className="btn btn-primary-outline btn_link"
                    onClick={() => window.open(project.github_link, "_blank")}
                  >
                    {project.github_icon}
                  </button>
                  <button
                    className="btn btn-primary-outline btn_link"
                    onClick={() => window.open(project.live_link, "_blank")}
                  >
                    {project.link_icon}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
