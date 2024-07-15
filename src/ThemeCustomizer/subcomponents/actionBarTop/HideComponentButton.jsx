import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const HideComponentButton = ({ hideCustomizer }) => {
  return (
    <button className="theme-button" id="hide-button" onClick={hideCustomizer}>
      <FontAwesomeIcon icon={faTimes} />
    </button>
  );
};

export default HideComponentButton;
