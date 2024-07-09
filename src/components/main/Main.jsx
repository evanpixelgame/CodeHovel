import "./Main.css";
import Portrait from "./Portrait";
import HomeText from "./HomeText";
import SideBorders from "./SideBorders";
import ThemeCustomizer from "./ThemeCustomizer";

const Main = () => {
  return (
    <div id="main">
      <div id="home-content">
        <SideBorders />
        <Portrait />
        <HomeText />
        <ThemeCustomizer />
      </div>
    </div>
  );
};

export default Main;
