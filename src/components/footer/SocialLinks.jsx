import github from "../../assets/githubIcon.png";
import twitter from "../../assets/twitterIcon.png";
import email from "../../assets/emailIcon.png";

const SocialLinks = () => {
  return (
    <div id="socialLinks">
      <a
        href="https://github.com/evanpixelgame"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="email" />
      </a>
      <a
        href="https://github.com/evanpixelgame"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="email" />
      </a>
      <a
        href="https://github.com/evanpixelgame"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={email} alt="email" />
      </a>
    </div>
  );
};
export default SocialLinks;
