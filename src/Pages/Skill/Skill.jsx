import React from "react";
import { Expertise } from "../../Components/Expertise/Expertise";
import "./Skill.css";

export const Skill = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills">
        <h1>My Expertise</h1>
        <div className="expertise">
          <Expertise
            icons="src/assets/monitor.svg"
            title="Software Development"
            text="Expert in object-oriented, functional and microservices development. I am proficient in Java, Go, JavaScript and Python."
            underlineColor="#DF058D"
          />
          <Expertise
            icons="src/assets/stack.svg"
            title="Full Stack Development"
            text="With more than 2 years of experience, leader of complete projects, from the design of the architecture to the deployment in production."
            underlineColor="#FF6B2B"
          />
          <Expertise
            icons="src/assets/python.svg"
            title="ML Development Deep Learning"
            text="Passionate about data science. Uses Python for data manipulation and cleaning. Extensive knowledge in machine learning for prediction and classification."
            underlineColor="#2C49D8"
          />
        </div>
      </div>
      <div className="image-skill"><img src="src/assets/hello-world-html-code-768x384.png" alt="image" /></div>
    </div>
  );
};