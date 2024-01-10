import React from "react";
import PropTypes from "prop-types";
import "./Expertise.css"; // Asegúrate de importar el archivo CSS donde definirás los estilos

export const Expertise = ({ icons, title, text }) => {
  return (
    <div className="expertise-container">
      <div className="expertise-title">
        <img src={icons} alt="icon" />
        <h3>{title}</h3>
      </div>
      <div className="expertise-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

Expertise.propTypes = {
  icons: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
