//want to make the buttons print to screen and console

import React from "react";
import PrintNew from "./PrintNew";
import PrintFull from "./PrintFull";
import useThemeProperties from "../utils/useThemeProperties";

const LogButtons = () => {
  const [themeProperties, setThemeProperties, initialVarListRef] =
    useThemeProperties();
  return (
    <div className="log-buttons">
      <PrintNew
        themeProperties={themeProperties}
        initialVarListRef={initialVarListRef}
      />
      <PrintFull themeProperties={themeProperties} />
    </div>
  );
};

export default LogButtons;
