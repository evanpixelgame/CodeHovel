import React, { useState } from "react";
import "./component.css";
import ComponentTitle from "./subcomponents/ComponentTitle";
import LogButtons from "./subcomponents/LogButtons";
import TopButtons from "./subcomponents/TopButtons";
import Instructions from "./subcomponents/Instructions";
import renderControls from "./controls/renderControls";

const ThemeCustomizer = () => {
  const [selectedSection, setSelectedSection] = useState("header");

  const [showInstructions, setShowInstructions] = useState(false);
  const [showCustomizer, setShowCustomizer] = useState(true);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const hideCustomizer = () => {
    setShowCustomizer(false);
  };

  if (!showCustomizer) {
    return null;
  }

  return (
    <div className="theme-customizer">
      <TopButtons
        toggleInstructions={toggleInstructions}
        hideCustomizer={hideCustomizer}
      />
      <ComponentTitle />
      {showInstructions && <Instructions />}
      <div id="selection-container">
        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
          className="main-select"
        >
          <option value="header">Header</option>
          <option value="main">Main</option>
          <option value="footer">Footer</option>
          <option value="siteTitle">Site Title</option>
          <option value="themeCustomizer">Theme Customizer</option>
          <option value="presetThemes">Preset Themes</option>
        </select>
      </div>
      <div className="controls">
        {renderControls(selectedSection, setSelectedSection)}
      </div>
      <LogButtons />
    </div>
  );
};

export default ThemeCustomizer;
