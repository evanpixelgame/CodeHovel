import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="navBar">
      <ul>
        <li>
          <Link to="/CodeHovel">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
