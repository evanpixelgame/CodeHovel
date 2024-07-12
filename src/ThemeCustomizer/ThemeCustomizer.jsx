// src/components/theme-customizer/ThemeCustomizer.js
import React, { useState } from "react";
import "./component.css";
import { HeaderControls, FooterControls } from "./controls";
import useThemeProperties from "./utils/useThemeProperties";
import handleInputChange from "./utils/handleInputChange";
import PresetSelector from "./subcomponents/PresetSelector";
import InfoButton from "./subcomponents/InfoButton";
import HideComponentButton from "./subcomponents/HideComponentButton";
import ComponentTitle from "./subcomponents/ComponentTitle";
import Instructions from "./subcomponents/Instructions";
import LogButtons from "./subcomponents/LogButtons";

const ThemeCustomizer = () => {
  const [themeProperties, setThemeProperties] = useThemeProperties();
  const handleInputChangeWithSetter = handleInputChange(setThemeProperties); // Pass setThemeProperties here

  const [selectedSection, setSelectedSection] = useState("header");

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
      <InfoButton />
      <ComponentTitle />
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

      {renderControls()}

      <LogButtons />
    </div>
  );
};

export default ThemeCustomizer;
