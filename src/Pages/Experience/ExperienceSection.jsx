import React from "react";
import { Experience } from "../../Components/Experience/Experience";
import { useState } from "react";
import "./ExperienceSection.css";

export const ExperienceSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("professional");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const professionalExperiences = (
    <>
      <Experience
        title="Software Enginner @ Intellsis"
        date="2023 - Present"
        ubication="Remote (Montréal, Canada)"
        description="Development of backend solutions in Intelisis providing support to the development team."
        technologies={["Golang", "Graphql", "PostgreSQL", "Docker"]}
        link="https://www.intellsis.com/"
        logo="src/assets/intel.png"
        name="Intellsis.com"
      />
      <Experience
        title="Software Quality Analyst @ Zuappy"
        date="2022 - 2023"
        ubication="Remote (Buenaventura, Colombia)"
        description="Quality assurance of the Zuappy platform, development of unit tests and provision of support to the development team."
        technologies={["UX/UI", "Excel", "Jira", "Postman"]}
        link="https://www.facebook.com/zuappysas/"
        logo="src/assets/zuap.png"
        name="Zuappy.com"
      />
    </>
  );

  const educationExperiences = (
    <>
      <Experience
        title="Software Enginner @ Universidad San Buenaventura"
        date="2022 - Present"
        ubication="Calí, Colombia"
        /* habla sobre la carrera */
        description="I am currently studying software engineering at the San Buenaventura University, I am in the 6th semester and I am very happy to be able to study this career."
        technologies={["Agile", "Analysis", "Design", "Development", "Testing"]}
        link="https://usbcali.edu.co/"
        logo="src/assets/sanbue.png"
        name="SanBuenaventura.com"
      />
    </>
  );

  return (
    <div id="experience" className="experience-container">
      <h1>Experience</h1>
      <nav className="experience-nav">
        <ul className="experience-nav-list">
          <li className="experience-nav-item">
            <img src="src/assets/work.svg" alt="icon" />
            <button
              onClick={() => handleCategoryChange("professional")}
              className={`experience-nav-link ${
                selectedCategory === "professional" ? "active" : ""
              }`}
            >
              Professional
            </button> 
          </li>
          <li className="experience-nav-item">
            <img src="src/assets/education.svg" alt="icon" />
            <button
              onClick={() => handleCategoryChange("education")}
              className={`experience-nav-link ${
                selectedCategory === "education" ? "active" : ""
              }`}
            >
              Education
            </button>
          </li>
        </ul>
      </nav>

      {selectedCategory === "professional" ? professionalExperiences : null}
      {selectedCategory === "education" ? educationExperiences : null}
    </div>
  );
};

