import React from "react";
import UnitAppender from "../subcomponents/UnitAppender";

const SideBorderControls = ({ themeProperties, handleInputChange }) => {
  const handleCheckboxChange = (e) => {
    const displayValue = e.target.checked ? "block" : "none";
    handleInputChange("sideBorderDisplay", displayValue);
  };

  const handleWidthMatch = (widthType) => {
    const widthValue = themeProperties[widthType];
    const calcValue = `calc(50% - ${widthValue} / 2)`;
    handleInputChange("sideBorderWidth", calcValue);
  };

  return (
    <>
      <div>
        <label>Display:</label>
        <input
          type="checkbox"
          checked={themeProperties.sideBorderDisplay === "block"}
          onChange={handleCheckboxChange}
        />
      </div>
      <div>
        <label>Background Color:</label>
        <input
          type="color"
          className="color-input"
          value={themeProperties.sideBorderBgColor}
          onChange={(e) =>
            handleInputChange("sideBorderBgColor", e.target.value)
          }
        />
      </div>
      <div>
        <label>Width:</label>
        <UnitAppender
          value={themeProperties.sideBorderWidth}
          onChange={(value) => handleInputChange("sideBorderWidth", value)}
        />
      </div>
      <div className="matching-grouping">
        <label>
          Match
          <br />
          Header:
        </label>
        <div className="link-style-button-container">
          <label className="match-style-button-container">
            <button
              type="button"
              className="theme-button linking-button"
              onClick={() => handleWidthMatch("headerWidth")}
            >
              Width
            </button>
          </label>
          <label className="match-style-button-container">
            <button
              type="button"
              className="theme-button linking-button"
              onClick={() =>
                handleInputChange(
                  "sideBorderBgColor",
                  themeProperties.headerBgColor
                )
              }
            >
              Color
            </button>
          </label>
        </div>
      </div>
      <div className="matching-grouping">
        <label>
          Match
          <br />
          Footer:
        </label>
        <div className="link-style-button-container">
          <label className="match-style-button-container">
            <button
              type="button"
              className="theme-button linking-button"
              onClick={() => handleWidthMatch("footerWidth")}
            >
              Width
            </button>
          </label>
          <label className="match-style-button-container">
            <button
              type="button"
              className="theme-button linking-button"
              onClick={() =>
                handleInputChange(
                  "sideBorderBgColor",
                  themeProperties.footerBgColor
                )
              }
            >
              Color
            </button>
          </label>
        </div>
      </div>
    </>
  );
};

export default SideBorderControls;
