import { StyledSection } from "./Styles/Section.styled";

const Section = ({ id, children, bgColor }) => {
  return (
    <StyledSection id={id} bgColor={bgColor}>
      <div className="content">{children}</div>
    </StyledSection>
  );
};

export default Section;
