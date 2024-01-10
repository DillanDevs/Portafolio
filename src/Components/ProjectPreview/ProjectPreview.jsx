// ProjectPreview.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ProjectPreview.css"; // Importa el archivo de estilo

const ProjectPreview = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="link-container">
      {/* Render a preview of each project */}
      <img
        src={project.images[0]}
        alt={project.label}
        className="project-image"
      />
      <div className="project-info">
        <h3>{project.title}</h3>
        <span>{project.label}</span>
      </div>
    </Link>
  );
};

export default ProjectPreview;
