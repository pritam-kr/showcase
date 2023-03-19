import React, { useEffect, useState } from "react";
import Select from "../../Components/Select/Select";
import { PROJECTS } from "../constants";
import { OPTIONS } from "./constants";
import "./Projects.css";

const Projects = () => {
  const [projectFilter, setProjectFilter] = useState("");
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    setProjectFilter("ReactJs");
  }, []);
  useEffect(() => {
    setProjectData(PROJECTS.filter((pro) => pro.stack.includes(projectFilter)));
  }, [projectFilter]);
  return (
    <div className="project_section" id="projects">
      <h1 className="text-h1 section_title project_title">
        Projects{" "}
        <Select
          value={projectFilter}
          setValue={setProjectFilter}
          options={OPTIONS}
        />
      </h1>
      <p className="paragraph text-left bio text-lg">
        Some of my cool Projects.
      </p>

      <div className="projects_wrapper">
        {projectData.length ? (
          <>
            {projectData.map((project) => {
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
                    <h1 className="text-h1 text-xl project_title">
                      {project.title}
                    </h1>
                    <p className="paragraph text-left text-lg project_des">
                      {project.description}
                    </p>

                    <div className="project_footer">
                      <button
                        className="btn btn-primary-outline btn_link"
                        onClick={() =>
                          window.open(project.github_link, "_blank")
                        }
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
          </>
        ) : (
          <div className="no_project">
            <img
              src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1679245486/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966_rfvnfh.gif"
              alt="Project"
              className="responsive-images dev_img"
            />
            <p className="paragraph">I'm Working on it</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
