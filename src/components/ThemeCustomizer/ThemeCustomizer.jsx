import React, { useState } from "react";
import Draggable from "react-draggable";
import "./component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import {
  HeaderControls,
  SiteTitleControls,
  NavBarControls,
  MainColorControls,
  MainFontControls,
  MainPositionControls,
  MainAnimationControls,
  FooterControls,
  SideBorderControls,
  SocialLinkControls,
  LightDarkToggleControls,
  ThemeCustomizerControls,
} from "./controls";
import { useThemeContext } from "./provider/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import handleInputChange from "./utils/handleInputChange";
import PresetSelector from "./subcomponents/PresetSelector";
import ComponentTitle from "./subcomponents/ComponentTitle";
import PrintButtons from "./subcomponents/actionBarBottom/PrintButtons";
import TopButtons from "./subcomponents/actionBarTop/TopButtons";
import Instructions from "./subcomponents/messages/Instructions";
import HideComponentButton from "./subcomponents/actionBarTop/HideComponentButton";

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

  const handleDragStart = (e) => {
    console.log("drag start");
    if (e.target.matches("input.range-input")) {
      // if target is an input with class 'range-input' prevents dragging of component instead of slide
      return false;
    }
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

  const hideMessage = () => {
    setShowMessage("");
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
      case "siteTitle":
        return (
          <SiteTitleControls
            themeProperties={themeProperties}
            handleInputChange={handleInputChangeWithSetter}
          />
        );
      case "navBar":
        return (
          <NavBarControls
            themeProperties={themeProperties}
            handleInputChange={handleInputChangeWithSetter}
          />
        );
      case "mainColor":
        return (
          <MainColorControls
            themeProperties={themeProperties}
            handleInputChange={handleInputChangeWithSetter}
          />
        );
      case "mainFont":
        return (
          <MainFontControls
            themeProperties={themeProperties}
            handleInputChange={handleInputChangeWithSetter}
          />
        );
      case "mainPosition":
        return (
          <MainPositionControls
            themeProperties={themeProperties}
            handleInputChange={handleInputChangeWithSetter}
          />
        );
      case "mainAnimation":
        return (
          <MainAnimationControls
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
      case "sideBorder":
        return (
          <SideBorderControls
            themeProperties={themeProperties}
            handleInputChange={handleInputChangeWithSetter}
          />
        );
      case "socialLink":
        return (
          <SocialLinkControls
            themeProperties={themeProperties}
            handleInputChange={handleInputChangeWithSetter}
          />
        );
      case "lightDarkToggle":
        return (
          <LightDarkToggleControls
            themeProperties={themeProperties}
            handleInputChange={handleInputChangeWithSetter}
          />
        );
      case "themeCustomizer":
        return (
          <ThemeCustomizerControls
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
      bounds="body"
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
          <option value="siteTitle">Site Title</option>
          <option value="navBar">Nav Bar</option>
          <option value="mainColor">Main - Colors</option>
          <option value="mainFont">Main - Fonts</option>
          <option value="mainPosition">Main - Positions</option>
          <option value="mainAnimation">Animation Colors</option>
          <option value="footer">Footer</option>
          <option value="sideBorder">Side Borders</option>
          <option value="socialLink">Social Links</option>
          <option value="lightDarkToggle">Light Mode Toggle</option>
          <option value="themeCustomizer">Theme Customizer</option>
          <option value="presetThemes">Preset Themes</option>
        </select>
        <div className="controls">{renderControls()}</div>
        {showMessage && (
          <div className="message-container">
            <div className="message">
              {JSON.stringify(showMessage, null, 2)}
            </div>
            <button
              className="theme-button"
              onClick={copyToClipboard}
              id="copy-button"
            >
              <FontAwesomeIcon icon={faClipboard} /> Copy
            </button>
            <HideComponentButton
              hideComponent={hideMessage}
              id="hide-msg-button"
            />
          </div>
        )}
        <PrintButtons
          initialVarListRef={initialVarListRef}
          themeProperties={themeProperties}
          selectedSection={selectedSection}
          setShowMessage={setShowMessage}
        />
        {/* <ToastContainer />    // Toast container was placed in App.jsx */}
      </div>
    </Draggable>
  );
};

export default ThemeCustomizer;
