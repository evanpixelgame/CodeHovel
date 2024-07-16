import Github from "../../assets/github.svg";
import Twitter from "../../assets/twitter.svg";
import Email from "../../assets/email.svg";

const SocialLinks = () => {
  return (
    <div id="socialLinks">
      <a
        href="https://github.com/evanpixelgame"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Github} alt="Github" />
      </a>
      <a
        href="https://github.com/evanpixelgame"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Twitter} alt="Twitter" />
      </a>
      <a
        href="https://github.com/evanpixelgame"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Email} alt="Email" />
      </a>
    </div>
  );
};
export default SocialLinks;
