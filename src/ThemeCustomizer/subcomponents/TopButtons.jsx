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
