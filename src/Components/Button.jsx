import React from "react";
import { StyledButton } from "./Styles/Button.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Button = ({ text, icon, version, size, path }) => {
  return (
    <StyledButton version={version} size={size}>
      <Link className="link" to="/">
        <FontAwesomeIcon icon={icon} />
        {text}
      </Link>
    </StyledButton>
  );
};

export default Button;
