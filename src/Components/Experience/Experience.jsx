// Experience.js
import React, { useState } from "react";
import "./Experience.css";
import { ExperienceDetail } from "../ExperienceDetail/ExperienceDetail";

export const Experience = (props) => {
  const {
    title,
    date,
    ubication,
    description,
    technologies,
    link,
    logo,
    name,
  } = props;
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className={`professional-xp ${active ? "active" : ""}`}>
        <div className="xp-header" onClick={handleToggle}>
          <h6 className="xp-title">{title}</h6>
          <h6 className="xp-date">{date}</h6>
          <button className="xp-toggle">{active ? "-" : "+"}</button>
        </div>
      </div>
      <div
        className={`xp-details-container ${active ? "xp-details-active" : ""}`}
      >
        <ExperienceDetail
          ubication={ubication}
          description={description}
          technologies={technologies}
          link={link}
          logo={logo}
          name={name}
        />
      </div>
    </div>
  );
};
