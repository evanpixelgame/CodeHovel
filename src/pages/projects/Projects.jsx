import "./Projects.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

// if its a direct route subpath can shorten it to relative to the parent like this if this route/link was child of projects route ex:  <Link to="videoDisplayNoFormat">

const Projects = () => {
  return (
    <>
      <div className="projects-page">
        <Header />
        <div className="project-list-container">
          <h3> Projects</h3>
          <button type="button" className="project-link-button">
            <Link to="/noFormat/videoDisplayNoFormat">
              Baby Bird Video Gallery
            </Link>
          </button>
          <button type="button" className="project-link-button">
            <Link to="/noFormat/imageDisplayNoFormat">
              Image Display Components
            </Link>
          </button>

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Projects;
