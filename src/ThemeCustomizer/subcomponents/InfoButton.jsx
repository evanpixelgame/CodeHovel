import React, { useState } from "react";
import Instructions from "./Instructions";

const InfoButton = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div>
      <button className="info-button" onClick={toggleInstructions}>
        ?
      </button>
      {showInstructions && <Instructions />}
    </div>
  );
};

export default InfoButton;
