import React from "react";

import Project from "./Project";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projects-card">
        {ProjectList.map((project, idx) => (
          <Project key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
