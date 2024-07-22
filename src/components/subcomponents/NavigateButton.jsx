import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavigateButton = ({ path, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <button
      className="navigate-button"
      id={id}
      onClick={handleClick}
      style={{
        backgroundColor: "transparent",
        position: "absolute",
        left: "20px",
        top: "20px",
      }}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};

export default NavigateButton;
