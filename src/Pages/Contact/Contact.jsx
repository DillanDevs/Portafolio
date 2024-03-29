import React from "react";
import { ContactForm } from "../../Components/ContacForm/ContactForm";
import "./Contact.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/icons8-linkedin.svg";
import email from "../../assets/icons8-nuevo-post-24.png";

const Contact = () => {

  return (
    <div className="contact-container" id="contact">
      <div className="findme-container">
        <h1>Find me on</h1>
        <div className="social-links">
          <a
            href="https://github.com/DillanDevs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub Logo" />
            <span>DillansDev</span>
          </a>
          <a
            href="https://www.linkedin.com/in/dillanasprilla/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn Logo" />
            <span>Dillan Asprilla</span>
          </a>
          <a
            href="https://www.linkedin.com/in/dillanasprilla/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={email} alt="LinkedIn Logo" />
            <span>dillansdev@gmail.com</span>
          </a>
          <a href="./cv_dillan.pdf" download={''} className="bt-cv">
            Download cv
          </a>
        </div>
      </div>
      <span className="or-divider">or</span>
      <div>
        <h1>Contact me</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
