import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ThemeCustomizer from "../../components/ThemeCustomizer/ThemeCustomizer";
import ShowCustomizerButton from "../../components/ThemeCustomizer/subcomponents/ShowCustomizerButton";

const Contact = () => {
  const [showCustomizer, setShowCustomizer] = useState(false);
  return (
    <>
      <Header />
      <div>Contact</div>
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
export default Contact;
