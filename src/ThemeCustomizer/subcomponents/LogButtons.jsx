import React from "react";

const LogButtons = ({
  initialThemeProperties,
  themeProperties,
  selectedSection,
}) => {
  // Function to log differences in the current section
  const logThisSection = () => {
    const initialSectionProps = initialThemeProperties[selectedSection] || {};
    const currentSectionProps = themeProperties[selectedSection] || {};

    const differences = Object.keys(currentSectionProps).reduce((diff, key) => {
      if (currentSectionProps[key] !== initialSectionProps[key]) {
        diff[key] = {
          initial: initialSectionProps[key],
          current: currentSectionProps[key],
        };
      }
      return diff;
    }, {});

    console.log(`Differences in ${selectedSection}:`, differences);
  };

  // Function to log differences across all sections
  const logAllSections = () => {
    const differences = Object.keys(themeProperties).reduce((diff, section) => {
      const initialSectionProps = initialThemeProperties[section] || {};
      const currentSectionProps = themeProperties[section] || {};

      const sectionDiff = Object.keys(currentSectionProps).reduce(
        (sectionDiff, key) => {
          if (currentSectionProps[key] !== initialSectionProps[key]) {
            sectionDiff[key] = {
              initial: initialSectionProps[key],
              current: currentSectionProps[key],
            };
          }
          return sectionDiff;
        },
        {}
      );

      if (Object.keys(sectionDiff).length > 0) {
        diff[section] = sectionDiff;
      }
      return diff;
    }, {});

    console.log("Differences across all sections:", differences);
  };

  return (
    <div className="log-buttons">
      <button className="theme-button" onClick={logThisSection}>
        Log This Section
      </button>
      <button className="theme-button" onClick={logAllSections}>
        Log All Sections
      </button>
    </div>
  );
};

export default LogButtons;
