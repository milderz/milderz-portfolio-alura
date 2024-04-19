import { StyledHero } from "./Styles/Hero.styled";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import LinkBtn from "./LinkBtn";

const Hero = () => {
  const [inView, setInView] = useState(false);
  return (
    <InView
      onChange={setInView}
      className={`${inView ? "in-view" : "in-view-false"}`}
      threshold={0.3}
    >
      <StyledHero>
        <div className="text-content">
          <h1>
            Milder Navarro <span>Frontend Developer</span>
          </h1>
          <p className="text-md">
            Developing modern websites that help businesses to grow!
          </p>
          <div className="hero-buttons">
            <LinkBtn
              path="https://github.com/milderz/"
              text="Github profile"
              icon={faGithub}
              version="black"
            />
            <LinkBtn
              path="https://www.linkedin.com/in/milder-navarro-068267216/"
              text="Linked In profile"
              icon={faLinkedin}
              version="mint"
            />
          </div>
        </div>

        <div className="profile-img">
          <img src="public/profile.png" width="320" alt="profile-avatar" />
        </div>
      </StyledHero>
    </InView>
  );
};

export default Hero;
