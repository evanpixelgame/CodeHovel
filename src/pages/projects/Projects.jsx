import "./Project.css";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ThemeCustomizer from "../../components/ThemeCustomizer/ThemeCustomizer";
import ShowCustomizerButton from "../../components/ThemeCustomizer/subcomponents/ShowCustomizerButton";
import Gallery from "../../components/imageDisplay/gallery/Gallery";
import Carousel from "../../components/imageDisplay/carousel/Carousel";

const Projects = () => {
  return (
    <>
      <div id="projects-page">
        <Header />
        <div>Projects</div>
        <Carousel />
        <Gallery />
        <Footer />
      </div>
    </>
  );
};
export default Projects;
