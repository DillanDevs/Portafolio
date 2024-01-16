import React from "react";
import "./Projects.css";
import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../../Components/NavBar/NavBar";
import FloatingButton from "../../Components/FloatingButton/FloatingButton";

export const Projects = ({ projectsData }) => {

  const { id } = useParams();
  const project = projectsData.find((projectItem) => projectItem.id === parseInt(id, 10));
  const navigate = useNavigate();

  if (!project) {
    return <h1>Project not found</h1>;
  }

  const { label, title, description, technologies, images, url } = project;


  return (
    <div className="project-container">
      <NavBar />
      <div className="project-content-container">
        <div className="project-content">
          <div className="project-title">
            <span>{label}</span>
            <h1>{title}</h1>
          </div>
          <div className="project-title-path"><a onClick={() => navigate("/")}>Home</a> &gt; <a onClick={() => navigate("/")}>Project</a> &gt; {title}</div>
          <div className="project-description-container">
            <div className="project-description">
              <p>{description}</p>
            </div>
            <div className="project-technologies">
              <h3>Tecnologies</h3>
              <p>{technologies}</p>
              <a href={url}>Open Project</a>
            </div>
          </div>
          <div className="project-images">
            {images.map((image, index) => (
              <img key={index} src={image} alt={label} />
            ))}
          </div>
          <div className="project-footer">
            <footer>
              <div>
                <span>
                © 2023. Made by <a href="">Dillan</a> with React
                </span>
              </div>
            </footer>
            <FloatingButton />
          </div>
        </div>
      </div>
    </div>
  );
};
