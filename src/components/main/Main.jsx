import "./Main.css";
import Portrait from "./Portrait";
import HomeText from "./HomeText";
import SideBorders from "./SideBorders";

const Main = () => {
  return (
    <div id="main">
      <div id="home-content">
        <SideBorders />
        <Portrait />
        <HomeText />
      </div>
    </div>
  );
};

export default Main;
