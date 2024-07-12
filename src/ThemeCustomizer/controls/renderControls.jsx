import React from "react";
import useThemeProperties from "../utils/useThemeProperties"; // Ensure useThemeProperties is imported correctly
import handleInputChange from "../utils/handleInputChange"; // Ensure handleInputChange is imported correctly
import { HeaderControls, FooterControls } from "./index"; // Adjust the import path as per your actual file structure
import PresetSelector from "../subcomponents/PresetSelector";

const renderControls = (selectedSection, setSelectedSection) => {
  const [themeProperties, setThemeProperties] = useThemeProperties();
  const handleInputChangeWithSetter = handleInputChange(setThemeProperties);

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

export default renderControls;
