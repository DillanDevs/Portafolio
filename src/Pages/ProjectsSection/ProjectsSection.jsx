// ProjectsSection.jsx
import React from "react";
import ProjectPreview from "../../Components/ProjectPreview/ProjectPreview";
import "./ProjectsSection.css"; // Importa el archivo de estilo

export const ProjectsSection = ({ projectsData }) => {
  return (
    <section className="projects-section" id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-preview">
            <ProjectPreview project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};
