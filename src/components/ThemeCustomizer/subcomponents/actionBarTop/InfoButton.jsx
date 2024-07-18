const InfoButton = ({ toggleInstructions }) => {
  return (
    <button
      className="theme-button"
      id="info-button"
      onClick={toggleInstructions}
    >
      ?
    </button>
  );
};

export default InfoButton;
