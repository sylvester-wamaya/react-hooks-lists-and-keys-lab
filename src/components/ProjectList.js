import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectElements = projects.map((proj)=>{
    return <ProjectItem key={proj.id} name={proj.name} technologies={proj.technologies}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectElements}
      </div>
    </div>
  );
}

export default ProjectList;
