import { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ThemeCustomizer from "../ThemeCustomizer/ThemeCustomizer";
import ShowCustomizerButton from "../ThemeCustomizer/subcomponents/ShowCustomizerButton";

const Projects = () => {
  const [showCustomizer, setShowCustomizer] = useState(false);
  return (
    <>
      <Header />
      <div>Projects</div>
      <ThemeCustomizer
        showCustomizer={showCustomizer}
        setShowCustomizer={setShowCustomizer}
      />
      {showCustomizer && <ThemeCustomizer />}
      <ShowCustomizerButton
        showCustomizer={showCustomizer}
        setShowCustomizer={setShowCustomizer}
      />
      <Footer />
    </>
  );
};
export default Projects;
