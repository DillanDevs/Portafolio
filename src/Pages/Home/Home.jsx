import React from "react";
import "./Home.css"; // Importa el archivo CSS correspondiente
import { Link } from "react-scroll";
import { NavBar } from "../../Components/NavBar/NavBar";


const Home = () => {
  return (
    <>
      <div className="home-container">
        <NavBar />
        <div className="home">
          <h1>DILLAN DEVS</h1>
          <h5>SOFWARE ENGINNER, FULL STACK DEVELOPER & ML ENTHUSIAST</h5>
        </div>
        <section className="demo" id="section07">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            className="mouse"
          >
            <span></span>
            <span></span>
            <span></span>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;
