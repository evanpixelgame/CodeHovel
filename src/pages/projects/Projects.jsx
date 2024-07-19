import "./Projects.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Projects = () => {
  return (
    <>
      <div className="projects-page">
        <Header />
        <div className="project-list-container">
          <h3> Projects</h3>
          <nav>
            <button type="button" className="project-link-button">
              <Link to="imageDisplay">Image Display Components</Link>
            </button>
          </nav>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
