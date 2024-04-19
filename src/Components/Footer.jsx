import { StyledFooter } from "./Styles/Footer.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="content">
        <img src="public/logo-black.svg" width="31" height="27" alt="" />
        <ul className="social-links">
          <li>
            <a href="https://github.com/milderz/">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/milder-navarro-068267216/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
