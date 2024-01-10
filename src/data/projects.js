import bankImage1 from "../assets/projects/bank/1.png";
import bankImage2 from "../assets/projects/bank/2.png";
import bankImage3 from "../assets/projects/bank/3.png";
import bankImage4 from "../assets/projects/bank/4.png";

import hospitalImage1 from "../assets/projects/hospital/1.png";
import hospitalImage2 from "../assets/projects/hospital/2.png";
import hospitalImage3 from "../assets/projects/hospital/3.png";
import hospitalImage4 from "../assets/projects/hospital/4_v2.png";
import hospitalImage5 from "../assets/projects/hospital/5.png";
import hospitalImage6 from "../assets/projects/hospital/6_v2.png";

import unicalcImage1 from "../assets/projects/unicalc/1.png";
import unicalcImage2 from "../assets/projects/unicalc/2.png";
import unicalcImage3 from "../assets/projects/unicalc/3.png";
import unicalcImage4 from "../assets/projects/unicalc/4.png";
import unicalcImage5 from "../assets/projects/unicalc/5.png";

export const ProjecsData = [
  {
    id: 1,
    label: "Web Development",
    title: "DJG Bank (Banking Solution)",
    description:
      "DJG Bank is a website that simulates an online bank. It allows users to create accounts, access services such as savings accounts and cards, make transactions, and request credit. The money shown is fictitious and has no validity in any country, designed to recreate the online banking experience.",
    technologies:
      "React, Spring Boot, PostgreSQL, JWT, Spring Security, API Rest, Maven",
    images: [bankImage1, bankImage2, bankImage3, bankImage4],
    url: "https://djgbank.netlify.app/",
  },
  {
    id: 2,
    label: "Web Development",
    title: "Sysmed Pro (Hospital Management System)",
    description:
      "SysMed Pro is a prototype hospital management tool that simplifies the administration of medical appointments. It allows patients to request appointments, helps doctors manage their agendas, stores medical records and generates medical reports, contributing to more efficient and complete care.",
    technologies: "React, Node, Express, API Rest, JWT",
    images: [
      hospitalImage1,
      hospitalImage2,
      hospitalImage3,
      hospitalImage4,
      hospitalImage5,
      hospitalImage6,
    ],
    url: "https://sysmedpro.netlify.app/",
  },
  {
    id: 3,
    label: "Web Development",
    title: "Unicalc (University Calculator)",
    description:
      "UniCalc is a page that makes it easier for university students to track their grades during the semester. Provides a summary of the requirements necessary to pass a subject, indicating whether the subject has already been passed or has been missed. Additionally, it calculates the semester average, allowing students to be more connected to their academic performance.",
    technologies: "React, Firebase, Python, FastAPI, Heroku",
    images: [
      unicalcImage1,
      unicalcImage2,
      unicalcImage3,
      unicalcImage4,
      unicalcImage5,
    ],
    url: "https://github.com/SrOscuroBlck/UniCalc",
  },
];
