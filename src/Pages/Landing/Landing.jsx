import React from "react";
import Home from "../Home/Home";
import { Skill } from "../Skill/Skill";
import { ExperienceSection } from "../Experience/ExperienceSection";
import Contact from "../Contact/Contact";
import FloatingButton from "../../Components/FloatingButton/FloatingButton";

import ProjecsData from "../../data/projects.json";
import { ProjectsSection } from "../ProjectsSection/ProjectsSection";

export const Landing = () => {
  return (
    <>
      <Home />
      <Skill />
      <ProjectsSection projectsData={ProjecsData} />
      <ExperienceSection />
      <Contact />
      <FloatingButton />
    </>
  );
};
