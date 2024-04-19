import { StyledLabel } from "./Styles/Label.styled";

const Label = (labelText, color, icon, children) => {
  return <StyledLabel color={color}>{children}</StyledLabel>;
};

export default Label;
