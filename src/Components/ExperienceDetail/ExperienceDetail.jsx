// ExperienceDetail.js

import React from "react";
import "./ExperienceDetail.css";

export const ExperienceDetail = ({
  ubication,
  link,
  name,
  description,
  technologies,
  logo,
}) => {
  return (
    <div className="xp-details">
      <div className="xp-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="xp-content-container">
        <div className="xp-location">
          <div className="xp-ubication">
            <svg
              className="xp-icon" // Agrega una clase para los iconos
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5" // Cambia de "stroke-width" a "strokeWidth"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p>{ubication}</p>
          </div>
          <div>
            <svg
              className="xp-icon" // Agrega una clase para los iconos
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5" // Cambia de "stroke-width" a "strokeWidth"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>

            <a href={link} target="_blank" rel="noreferrer">
              {name}
            </a>
          </div>
        </div>

        <div className="xp-content">
          <p className="xp-description">{description}</p>
          <div className="xp-technologies">
            {technologies.map((technology, index) => (
              <div key={index} className="xp-tech-item-container">
                <span className="xp-tech-item">{technology}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
