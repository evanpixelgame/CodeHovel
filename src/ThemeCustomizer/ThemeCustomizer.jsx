import React, { useState } from "react";
import useThemeProperties from "./utils/useThemeProperties";
import { HeaderControls, FooterControls } from "./controls";
import PresetSelector from "./subcomponents/PresetSelector";
import "./component.css";

const ThemeCustomizer = () => {
  const [themeProperties, setThemeProperties] = useThemeProperties();
  const [selectedSection, setSelectedSection] = useState("header");

  const handleInputChange = (property, value) => {
    let formattedValue = typeof value === "number" ? `${value}px` : value;
    if (property === "primaryFontFamily" && !value.startsWith('"')) {
      formattedValue = `"${value}`;
    }

    setThemeProperties((prevProps) => ({
      ...prevProps,
      [property]: formattedValue,
    }));
  };

  const renderControls = () => {
    switch (selectedSection) {
      case "header":
        return (
          <HeaderControls
            themeProperties={themeProperties}
            handleInputChange={handleInputChange}
          />
        );
      case "footer":
        return (
          <FooterControls
            themeProperties={themeProperties}
            handleInputChange={handleInputChange}
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
      <p>
        <strong>Theme customizer:</strong>
        <br />
        Select part to customize from dropdown
        <br />
        Click print css to log the adjustments
        <br />
        Or select Preset Themes to use existing
      </p>
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

      <button type="button" className="themeButton">
        Print CSS
      </button>
    </div>
  );
};

export default ThemeCustomizer;
