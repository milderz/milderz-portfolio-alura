import { StyledLetsTalk } from "./Styles/LetsTalk.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { InView } from "react-intersection-observer";
import { useState } from "react";

const LetsTalk = () => {
  const [inView, setInView] = useState(false);
  return (
    <StyledLetsTalk>
      <InView
        onChange={setInView}
        className={`${inView ? "in-view" : "in-view-false"}`}
        threshold={0.125}
      >
        <h4>Let's talk</h4>
        <a className="mail-link" href="mailto:mzunax@gmail.com">
          mzunax@gmail.com
          <FontAwesomeIcon icon={faShare} />
        </a>
      </InView>
    </StyledLetsTalk>
  );
};

export default LetsTalk;
