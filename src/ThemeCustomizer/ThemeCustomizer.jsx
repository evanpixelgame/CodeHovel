import React, { useState } from "react";
import "./component.css";
import { HeaderControls, FooterControls } from "./controls";
import useThemeProperties from "./utils/useThemeProperties";
import handleInputChange from "./utils/handleInputChange";
import PresetSelector from "./subcomponents/PresetSelector";
import ComponentTitle from "./subcomponents/ComponentTitle";
import LogButtons from "./subcomponents/LogButtons";
import TopButtons from "./subcomponents/TopButtons";
import Instructions from "./subcomponents/Instructions";

const ThemeCustomizer = ({ showCustomizer, setShowCustomizer }) => {
  const [initialThemeProperties] = useState(useThemeProperties()[0]);
  const [themeProperties, setThemeProperties] = useThemeProperties();
  const handleInputChangeWithSetter = handleInputChange(setThemeProperties);

  const [selectedSection, setSelectedSection] = useState("header");
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const hideCustomizer = () => {
    setShowCustomizer(false);
  };

  if (!showCustomizer) {
    return null;
  }

  const renderControls = () => {
    switch (selectedSection) {
      case "header":
        return (
          <HeaderControls
            themeProperties={themeProperties}
            handleInputChange={handleInputChangeWithSetter}
          />
        );
      case "footer":
        return (
          <FooterControls
            themeProperties={themeProperties}
            handleInputChange={handleInputChangeWithSetter}
          />
        );
      case "presetThemes":
        return <PresetSelector />;
      default:
        return null;
    }
  };

  return (
    <div className="theme-customizer">
      <TopButtons
        toggleInstructions={toggleInstructions}
        hideCustomizer={hideCustomizer}
      />
      <ComponentTitle />
      {showInstructions && <Instructions />}
      <select
        value={selectedSection}
        onChange={(e) => setSelectedSection(e.target.value)}
      >
        <option value="header">Header</option>
        <option value="main">Main</option>
        <option value="footer">Footer</option>
        <option value="siteTitle">Site Title</option>
        <option value="themeCustomizer">Theme Customizer</option>
        <option value="presetThemes">Preset Themes</option>
      </select>
      <div className="controls">{renderControls()}</div>
      <LogButtons
        initialThemeProperties={initialThemeProperties}
        themeProperties={themeProperties}
        selectedSection={selectedSection}
      />
    </div>
  );
};

export default ThemeCustomizer;
