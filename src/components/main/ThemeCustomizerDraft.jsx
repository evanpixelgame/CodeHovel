import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    for (const [key, value] of Object.entries(themeProperties)) {
      const cssVariableName = `--${key
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase()}`;
      document.documentElement.style.setProperty(cssVariableName, value);
    }
  }, [themeProperties]);

  const handleInputChange = (property, value) => {
    setThemeProperties((prevProps) => ({
      ...prevProps,
      [property]: value,
    }));
  };

  return (
    <div className="theme-customizer">
      <div>
        <label>Primary Background Color:</label>
        <input
          type="color"
          value={themeProperties.primaryBgColor}
          onChange={(e) => handleInputChange("primaryBgColor", e.target.value)}
        />
      </div>
      <div>
        <label>Secondary Background Color:</label>
        <input
          type="color"
          value={themeProperties.secondaryBgColor}
          onChange={(e) =>
            handleInputChange("secondaryBgColor", e.target.value)
          }
        />
      </div>
      <div>
        <label>Primary Accent Color:</label>
        <input
          type="color"
          value={themeProperties.primaryAccentColor}
          onChange={(e) =>
            handleInputChange("primaryAccentColor", e.target.value)
          }
        />
      </div>
      <div>
        <label>Secondary Accent Color:</label>
        <input
          type="color"
          value={themeProperties.secondaryAccentColor}
          onChange={(e) =>
            handleInputChange("secondaryAccentColor", e.target.value)
          }
        />
      </div>
      <div>
        <label>Tertiary Accent Color:</label>
        <input
          type="color"
          value={themeProperties.tertiaryAccentColor}
          onChange={(e) =>
            handleInputChange("tertiaryAccentColor", e.target.value)
          }
        />
      </div>
      {/* Add more inputs for other properties */}
    </div>
  );
};

export default ThemeCustomizer;
