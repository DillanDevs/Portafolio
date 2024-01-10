import React, { useState } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [click, setClick] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="navbar-items">
        <h1 className="logo" onClick={() => navigate("/")}>
          Dillan's
        </h1>
        <div className="menu-icons" onClick={handleClick}>
          {click ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={handleClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={handleClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <ul className={click ? "nav-menu" : "nav-menu active"}>
          <li>
            <Link
              to="home"
              className="nav-link"
              duration={700}
              spy={true}
              smooth={true}
              offset={-70}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              className="nav-link"
              duration={700}
              spy={true}
              smooth={true}
              offset={-70}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className="nav-link"
              duration={700}
              spy={true}
              smooth={true}
              offset={-70}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              className="nav-link"
              duration={700}
              spy={true}
              smooth={true}
              offset={-70}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="nav-link"
              duration={700}
              spy={true}
              smooth={true}
              offset={-70}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
