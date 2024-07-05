import "./Header.css";
import LightDarkToggle from "./LightDarkToggle";
import NavBar from "./NavBar";
import SiteTitle from "./SiteTitle";

const Header = () => {
  return (
    <header id="header">
      <SiteTitle />
      <NavBar />
      <LightDarkToggle />
    </header>
  );
};

export default Header;
