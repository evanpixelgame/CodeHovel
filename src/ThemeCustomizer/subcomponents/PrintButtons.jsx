import React from "react";
import PrintNew from "./PrintNew";
import PrintFull from "./PrintFull";
import useThemeProperties from "../utils/useThemeProperties";

const LogButtons = () => {
  const [themeProperties, setThemeProperties] = useThemeProperties();
  return (
    <div className="log-buttons">
      <PrintNew themeProperties={themeProperties} />
      <PrintFull themeProperties={themeProperties} />
    </div>
  );
};

export default LogButtons;
