import "./Projects.css";
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ThemeCustomizer from "../../components/ThemeCustomizer/ThemeCustomizer";
import ShowCustomizerButton from "../../components/ThemeCustomizer/subcomponents/ShowCustomizerButton";

const Projects = () => {
  const [showCustomizer, setShowCustomizer] = useState(false);
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

          <ThemeCustomizer
            showCustomizer={showCustomizer}
            setShowCustomizer={setShowCustomizer}
          />
          {showCustomizer && <ThemeCustomizer />}

          <div className="theme-customizer-button-container">
            <ShowCustomizerButton
              showCustomizer={showCustomizer}
              setShowCustomizer={setShowCustomizer}
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Projects;
