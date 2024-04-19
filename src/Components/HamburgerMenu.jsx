import React from "react";
import { StyledHamburgerMenu } from "./Styles/HamburgerMenu.styled";

const HamburgerMenu = ({ navActive, handleNavActive }) => {
  return (
    <StyledHamburgerMenu>
      <div
        id="hamburger-1"
        className={`hamburger ${navActive && "is-active"}`}
        onClick={handleNavActive}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </StyledHamburgerMenu>
  );
};

export default HamburgerMenu;
