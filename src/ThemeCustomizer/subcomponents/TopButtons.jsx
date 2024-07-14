//add a checkbox for top left to enable drag
//dragging it outside flexbox should remove it from flex container so the other elements place appropriates

import InfoButton from "./InfoButton";
import HideComponentButton from "./HideComponentButton";
import DragCheckbox from "./DragCheckbox";

const TopButtons = ({
  toggleInstructions,
  hideCustomizer,
  isDraggable,
  handleCheckboxChange,
}) => {
  return (
    <div className="top-buttons">
      <DragCheckbox
        isDraggable={isDraggable}
        handleCheckboxChange={handleCheckboxChange}
      />
      <div className="top-right-buttons">
        <InfoButton toggleInstructions={toggleInstructions} />
        <HideComponentButton hideCustomizer={hideCustomizer} />
      </div>
    </div>
  );
};

export default TopButtons;
