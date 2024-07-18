//want to make the buttons print to screen and console

import React from "react";
import PrintNew from "./PrintNew";
import PrintFull from "./PrintFull";

const LogButtons = ({ themeProperties, initialVarListRef, setShowMessage }) => {
  return (
    <div className="log-buttons">
      <PrintNew
        themeProperties={themeProperties}
        initialVarListRef={initialVarListRef}
        setShowMessage={setShowMessage}
      />
      <PrintFull
        themeProperties={themeProperties}
        setShowMessage={setShowMessage}
      />
    </div>
  );
};

export default LogButtons;
