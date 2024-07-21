import React from "react";
import { Link } from "react-router-dom";
import ThemeCustomizer from "../ThemeCustomizer/ThemeCustomizer";
import ShowCustomizerButton from "../ThemeCustomizer/subcomponents/ShowCustomizerButton";

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
      <Link to="/projects/imageDisplay">
        <button
          type="button"
          className="theme-button"
          id="baby-bird-button"
          style={{ margin: "10px", backgroundColor: "lightcoral" }}
        >
          <h1 style={{ fontSize: "15px" }}>
            BABY BIRD <br /> VIDEOS <br /> BUTTON
          </h1>
        </button>
      </Link>
    </div>
  );
};

export default HomeText;
