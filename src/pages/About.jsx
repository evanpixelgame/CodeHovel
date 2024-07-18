import { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ThemeCustomizer from "../ThemeCustomizer/ThemeCustomizer";
import ShowCustomizerButton from "../ThemeCustomizer/subcomponents/ShowCustomizerButton";

const About = () => {
  const [showCustomizer, setShowCustomizer] = useState(false);
  return (
    <>
      <Header />
      <div>About</div>
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
export default About;
