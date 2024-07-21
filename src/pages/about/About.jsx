import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ThemeCustomizer from "../../components/ThemeCustomizer/ThemeCustomizer";
import ShowCustomizerButton from "../../components/ThemeCustomizer/subcomponents/ShowCustomizerButton";
import MattLogo from "../../assets/MattLogo7.svg";

const About = () => {
  const [showCustomizer, setShowCustomizer] = useState(false);
  return (
    <>
      <Header />
      <img src={MattLogo} alt="matt logo test" id="matttest" />
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
    </>
  );
};
export default About;
