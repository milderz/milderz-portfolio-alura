import { StyledSectionHeader } from "./Styles/SectionHeader.styled";
import { InView } from "react-intersection-observer";
import { useState } from "react";

const SectionHeader = ({ headline, title }) => {
  const [inView, setInView] = useState(false);

  return (
    <StyledSectionHeader inView={inView}>
      <InView onChange={setInView} threshold={0.4}>
        <p className="headline">{headline}</p>
        <h2>{title}</h2>
      </InView>
    </StyledSectionHeader>
  );
};

export default SectionHeader;
