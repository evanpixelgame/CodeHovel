import React, { useState } from "react";
import Draggable from "react-draggable";
import "./component.css";
import { HeaderControls, FooterControls } from "./controls";
import { useThemeContext } from "./provider/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import handleInputChange from "./utils/handleInputChange";
import PresetSelector from "./subcomponents/PresetSelector";
import ComponentTitle from "./subcomponents/ComponentTitle";
import PrintButtons from "./subcomponents/actionBarBottom/PrintButtons";
import TopButtons from "./subcomponents/actionBarTop/TopButtons";
import Instructions from "./subcomponents/messages/Instructions";

const ThemeCustomizer = ({ showCustomizer, setShowCustomizer }) => {
  const { themeProperties, setThemeProperties, initialVarListRef } =
    useThemeContext();

  const handleInputChangeWithSetter = handleInputChange(setThemeProperties);

  const [selectedSection, setSelectedSection] = useState("header");
  const [showInstructions, setShowInstructions] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const [isDraggable, setIsDraggable] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleCheckboxChange = () => {
    setIsDraggable(!isDraggable);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragStop = () => {
    setIsDragging(false);
  };

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const hideCustomizer = () => {
    setShowCustomizer(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(showMessage, null, 2));
    toast.success("Message copied to clipboard!");
  };

  if (!showCustomizer) {
    return null;
  }

  const renderControls = () => {
    switch (selectedSection) {
      case "header":
        return (
          <HeaderControls
            themeProperties={themeProperties}
            handleInputChange={handleInputChangeWithSetter}
          />
        );
      case "footer":
        return (
          <FooterControls
            themeProperties={themeProperties}
            handleInputChange={handleInputChangeWithSetter}
          />
        );
      case "presetThemes":
        return <PresetSelector />;
      default:
        return null;
    }
  };

  return (
    <Draggable
      disabled={!isDraggable}
      onStart={handleDragStart}
      onStop={handleDragStop}
      bounds="window"
    >
      <div className="theme-customizer">
        <TopButtons
          toggleInstructions={toggleInstructions}
          hideCustomizer={hideCustomizer}
          isDraggable={isDraggable}
          handleCheckboxChange={handleCheckboxChange}
        />
        <ComponentTitle />
        {showInstructions && <Instructions />}
        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
        >
          <option value="header">Header</option>
          <option value="main">Main</option>
          <option value="footer">Footer</option>
          <option value="siteTitle">Site Title</option>
          <option value="themeCustomizer">Theme Customizer</option>
          <option value="presetThemes">Preset Themes</option>
        </select>
        <div className="controls">{renderControls()}</div>
        {showMessage && (
          <div className="message-container">
            <div className="message">
              {JSON.stringify(showMessage, null, 2)}
            </div>
            <button className="copy-button" onClick={copyToClipboard}>
              Copy to Clipboard
            </button>
          </div>
        )}
        <PrintButtons
          initialVarListRef={initialVarListRef}
          themeProperties={themeProperties}
          selectedSection={selectedSection}
          setShowMessage={setShowMessage}
        />
      </div>
    </Draggable>
  );
};

export default ThemeCustomizer;
