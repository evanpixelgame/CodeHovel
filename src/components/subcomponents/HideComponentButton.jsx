import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const HideComponentButton = ({ hideComponent, id }) => {
  return (
    <button className="theme-button" id={id} onClick={hideComponent}>
      <FontAwesomeIcon icon={faTimes} />
    </button>
  );
};

export default HideComponentButton;

///MAKE A RETURN COMPONENT
