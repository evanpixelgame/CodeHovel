//add a checkbox for top left to enable drag
//dragging it outside flexbox should remove it from flex container so the other elements place appropriates

import InfoButton from "./InfoButton";
import HideComponentButton from "./HideComponentButton";

const TopButtons = ({ toggleInstructions, hideCustomizer }) => {
  return (
    <div className="top-buttons">
      <InfoButton toggleInstructions={toggleInstructions} />
      <HideComponentButton hideCustomizer={hideCustomizer} />
    </div>
  );
};

export default TopButtons;
