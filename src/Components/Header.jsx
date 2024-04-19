import { StyledHeader } from "./Styles/Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import { Link } from "react-scroll";
import Button from "./Button";

const Header = ({ prevBtnActive }) => {
  const [navActive, setNavActive] = useState(false);

  const handleNavActive = () => {
    setNavActive(!navActive);
  };
  return (
    <StyledHeader navActive={navActive}>
      <div className="content">
        {prevBtnActive ? (
          <div style={{ flex: "1" }}>
            <Button
              size="small"
              version="mint"
              text="BACK"
              icon={faArrowLeftLong}
            />
          </div>
        ) : (
          <>
            <HamburgerMenu
              navActive={navActive}
              handleNavActive={handleNavActive}
            />

            <nav className="nav-links">
              <ul>
                <li>
                  <Link
                    activeClass="active"
                    smooth
                    spy
                    to="projects"
                    offset={-200}
                  >
                    PROJECTS
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    smooth
                    spy
                    to="about"
                    offset={-200}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    smooth
                    spy
                    to="skills"
                    offset={-200}
                  >
                    SKILLS
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    smooth
                    spy
                    to="contact"
                    offset={-200}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}

        <img src="/logo.svg" width="31" height="27" alt="" />
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
    </StyledHeader>
  );
};

export default Header;
