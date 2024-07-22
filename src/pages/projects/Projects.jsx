import "./Projects.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Projects = () => {
  return (
    <>
      <div className="projects-page">
        <Header />
        <div className="project-list-container">
          <h3> Projects</h3>
          <button type="button" className="project-link-button">
            <Link to="/noFormat/videoDisplay">Baby Bird Video Gallery</Link>
          </button>
          <button type="button" className="project-link-button">
            <Link to="/noFormat/imageDisplay">Image Display Components</Link>
          </button>

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Projects;
