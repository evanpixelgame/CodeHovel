const HideComponentButton = ({ hideCustomizer }) => {
  return (
    <button className="theme-button" id="hide-button" onClick={hideCustomizer}>
      X
    </button>
  );
};

export default HideComponentButton;
