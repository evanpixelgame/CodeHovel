import "./ImageDisplay.css";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Gallery from "../../../components/imageDisplay/gallery/Gallery";
import Carousel from "../../../components/imageDisplay/carousel/Carousel";

const Projects = () => {
  return (
    <>
      <div id="image-display-page">
        <Header />
        <div>Image Displays:</div>
        <Carousel />
        <Gallery />
        <Footer />
      </div>
    </>
  );
};
export default Projects;
