import React from "react";
import UnitAppender from "../subcomponents/UnitAppender";

const SideBorderControls = ({ themeProperties, handleInputChange }) => {
  const handleCheckboxChange = (e) => {
    const displayValue = e.target.checked ? "block" : "none";
    handleInputChange("sideBorderDisplay", displayValue);
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
              onClick={() =>
                handleInputChange(
                  "sideBorderWidth",
                  themeProperties.headerWidth
                )
              }
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
              onClick={() =>
                handleInputChange(
                  "sideBorderWidth",
                  themeProperties.footerWidth
                )
              }
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
