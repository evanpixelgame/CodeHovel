import React from "react";
import ShowCustomizerButton from "../../ThemeCustomizer/subcomponents/ShowComponentButton";

const HomeText = ({ setShowCustomizer }) => {
  return (
    <div id="home-text-group">
      <h1 id="mainText">
        Full-stack web developer. Ready to meet your online needs.
      </h1>
      <h3 id="subText">Bring your ideas to life today.</h3>
      <ShowCustomizerButton setShowCustomizer={setShowCustomizer} />
    </div>
  );
};

export default HomeText;
