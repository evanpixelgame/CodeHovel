import React from "react";
import ThemeCustomizer from "../../components/ThemeCustomizer/ThemeCustomizer";
import ShowCustomizerButton from "../../components/ThemeCustomizer/subcomponents/ShowCustomizerButton";

const HomeText = ({ showCustomizer, setShowCustomizer }) => {
  return (
    <div id="home-text-group">
      <h1 id="mainText">
        Full-stack web developer. Ready to meet your online needs.
      </h1>
      <h3 id="subText">Bring your ideas to life today.</h3>
      {showCustomizer && <ThemeCustomizer />}
      <ShowCustomizerButton
        showCustomizer={showCustomizer}
        setShowCustomizer={setShowCustomizer}
      />
    </div>
  );
};

export default HomeText;
