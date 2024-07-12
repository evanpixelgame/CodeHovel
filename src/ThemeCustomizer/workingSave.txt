import React, { useState, useEffect } from "react";
import ThemeSelector from "./ThemeSelector";
import "./themeComponent.css";

const getCssVariableValue = (variableName) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
};

const ThemeCustomizer = () => {
  const [themeProperties, setThemeProperties] = useState({
    primaryBgColor: getCssVariableValue("--primary-bg-color") || "#3b3b3b",
    secondaryBgColor: getCssVariableValue("--secondary-bg-color") || "#343434",
    primaryAccentColor:
      getCssVariableValue("--primary-accent-color") || "#9995db",
    secondaryAccentColor:
      getCssVariableValue("--secondary-accent-color") || "#ed6a5a",
    tertiaryAccentColor:
      getCssVariableValue("--tertiary-accent-color") || "#fb8b24",
    primaryFontFamily:
      getCssVariableValue("--primary-font-family") || '"Roboto"',
    primaryTextColor: getCssVariableValue("--primary-text-color") || "#b4b4b4",
    secondaryTextColor:
      getCssVariableValue("--secondary-text-color") || "#ffffff",
    mainTextFontSize: getCssVariableValue("--main-text-font-size") || "40px",
    subTextFontSize: getCssVariableValue("--sub-text-font-size") || "16px",
    siteTitleFontFamily:
      getCssVariableValue("--site-title-font-family") || '"Roboto"',
    siteTitleColor: getCssVariableValue("--site-title-color") || "#ce721d",
    siteTitleFontSize: getCssVariableValue("--site-title-font-size") || "24px",
    siteTitlePadLeft: getCssVariableValue("--site-title-pad-left") || "1%",
    navBgColor: getCssVariableValue("--nav-bg-color") || "#f5f5f5",
    navLinkColor: getCssVariableValue("--nav-link-color") || "#3b3b3b",
    navLinkFontFamily:
      getCssVariableValue("--nav-link-font-family") || '"Inter"',
    headerWidth: getCssVariableValue("--header-width") || "80%",
    headerHeight: getCssVariableValue("--header-height") || "15%",
    headerBgColor: getCssVariableValue("--header-bg-color") || "#343434",
    footerWidth: getCssVariableValue("--footer-width") || "80%",
    footerHeight: getCssVariableValue("--footer-height") || "15%",
    footerBgColor: getCssVariableValue("--footer-bg-color") || "#343434",
    togglePlacementTop: getCssVariableValue("--toggle-placement-top") || "5%",
    togglePlacementRight:
      getCssVariableValue("--toggle-placement-right") || "5%",
    themeSelectorBgColor:
      getCssVariableValue("--theme-selector-bg-color") || "#8b85d5",
    sideBorderBgColor:
      getCssVariableValue("--side-border-bg-color") || "#343434",
    sideBorderDisplay: getCssVariableValue("--side-border-display") || "none",
    socialLinksGap: getCssVariableValue("--social-links-gap") || "20%",
  });

  const [selectedSection, setSelectedSection] = useState("header");

  useEffect(() => {
    for (const [key, value] of Object.entries(themeProperties)) {
      const cssVariableName = `--${key
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase()}`;
      document.documentElement.style.setProperty(cssVariableName, value);
    }
  }, [themeProperties]);

  const handleInputChange = (property, value) => {
    let formattedValue = typeof value === "number" ? `${value}px` : value;
    if (property === "primaryFontFamily" && !value.startsWith('"')) {
      formattedValue = `"${value}`; // Add quotes around the value
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
          <>
            <div>
              <label>Header Background Color:</label>
              <input
                type="color"
                value={themeProperties.headerBgColor}
                onChange={(e) =>
                  handleInputChange("headerBgColor", e.target.value)
                }
              />
            </div>
            <div>
              <label>Header Width:</label>
              <input
                type="text"
                value={themeProperties.headerWidth}
                onChange={(e) =>
                  handleInputChange("headerWidth", e.target.value)
                }
              />
            </div>
            <div>
              <label>Header Height:</label>
              <input
                type="text"
                value={themeProperties.headerHeight}
                onChange={(e) =>
                  handleInputChange("headerHeight", e.target.value)
                }
              />
            </div>
          </>
        );
      case "footer":
        return (
          <>
            <div>
              <label>Footer Background Color:</label>
              <input
                type="color"
                value={themeProperties.footerBgColor}
                onChange={(e) =>
                  handleInputChange("footerBgColor", e.target.value)
                }
              />
            </div>
            <div>
              <label>Footer Width:</label>
              <input
                type="text"
                value={themeProperties.footerWidth}
                onChange={(e) =>
                  handleInputChange("footerWidth", e.target.value)
                }
              />
            </div>
            <div>
              <label>Footer Height:</label>
              <input
                type="text"
                value={themeProperties.footerHeight}
                onChange={(e) =>
                  handleInputChange("footerHeight", e.target.value)
                }
              />
            </div>
          </>
        );
      case "presetThemes":
        return (
          <div id="theme-selector-option">
            <ThemeSelector />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="theme-customizer">
      <p>
        <strong>Theme customizer:</strong>
        <br />
        Please select a part to customize from dropdown
        <br />
        Press print css to console log the css adjustments
        <br />
        Or select Preset Themes from drop to use existing
      </p>
      <select
        value={selectedSection}
        onChange={(e) => setSelectedSection(e.target.value)}
      >
        <option value="header">Header</option>
        <option value="main">Main</option>
        <option value="footer">Footer</option>
        <option value="siteTitle">Site Title</option>
        <option value="customThemeTool">Custom Theme Tool</option>
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
