import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledLinkBtn } from "./Styles/LinkBtn.styled";

const LinkBtn = ({ text, icon, version, size, path }) => {
  return (
    <StyledLinkBtn version={version} size={size}>
      <a className="link" href={path} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon} />
        {text}
      </a>
    </StyledLinkBtn>
  );
};

export default LinkBtn;
