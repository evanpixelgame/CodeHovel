import { useState } from "react";
import "./Main.css";
import Portrait from "./Portrait";
import HomeText from "./HomeText";
import SideBorders from "./SideBorders";
import ThemeCustomizer from "../../ThemeCustomizer/ThemeCustomizer";
import ShowCustomizerButton from "../../ThemeCustomizer/subcomponents/ShowComponentButton";

const Main = () => {
  const [showCustomizer, setShowCustomizer] = useState(false);
  return (
    <div id="main">
      <div id="home-content">
        <SideBorders />
        <Portrait />
        <ShowCustomizerButton setShowCustomizer={setShowCustomizer} />
        <HomeText />
        <ThemeCustomizer
          showCustomizer={showCustomizer}
          setShowCustomizer={setShowCustomizer}
        />
      </div>
    </div>
  );
};

export default Main;
