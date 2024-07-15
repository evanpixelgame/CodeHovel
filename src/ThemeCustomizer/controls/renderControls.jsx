import React from "react";
import { useThemeContext } from "../provider/ContextProvider";
import handleInputChange from "../utils/handleInputChange";
import {
  HeaderControls,
  FooterControls,
  ThemeCustomizerControls,
} from "./index";
import PresetSelector from "../subcomponents/PresetSelector";

const renderControls = (selectedSection, setSelectedSection) => {
  const { themeProperties, setThemeProperties } = useThemeContext();
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
    case "themeCustomizer":
      return (
        <ThemeCustomizerControls
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
