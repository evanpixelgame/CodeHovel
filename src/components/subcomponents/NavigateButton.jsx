import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavigateButton = ({ path, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <button className="theme-button" id={id} onClick={handleClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};

export default NavigateButton;
