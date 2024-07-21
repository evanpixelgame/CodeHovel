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

          <button type="button" className="project-link-button">
            <Link to="videoDisplay">Baby Bird Video Gallery</Link>
          </button>
          <button type="button" className="project-link-button">
            <Link to="imageDisplay">Image Display Components</Link>
          </button>

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Projects;
