import { useState } from "react";
import "./Main.css";
import Portrait from "./Portrait";
import HomeText from "./HomeText";
import SideBorders from "./SideBorders";
import ThemeCustomizer from "../../ThemeCustomizer/ThemeCustomizer";
import ShowCustomizerButton from "../../ThemeCustomizer/subcomponents/ShowCustomizerButton";

const Main = () => {
  const [showCustomizer, setShowCustomizer] = useState(false);

  return (
    <div id="main">
      <div id="home-content">
        <SideBorders />
        <Portrait />
        <HomeText
          showCustomizer={showCustomizer}
          setShowCustomizer={setShowCustomizer}
        />
        <ThemeCustomizer
          showCustomizer={showCustomizer}
          setShowCustomizer={setShowCustomizer}
        />
      </div>
    </div>
  );
};

export default Main;
