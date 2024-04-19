import styled from "styled-components";

export const StyledHamburgerMenu = styled.div`
  flex: 1;
  display: none;

  transform: scale(0.8);
  @media screen and (max-width: 980px) {
    display: flex;
  }

  .hamburger .line {
    width: 40px;
    height: 5px;
    background-color: var(--text-gray);
    display: block;
    margin: 8px auto;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .hamburger:hover {
    cursor: pointer;

    .line {
      background-color: var(--green);
    }
  }

  #hamburger-1.is-active .line:nth-child(2) {
    opacity: 0;
  }

  #hamburger-1.is-active .line:nth-child(1) {
    -webkit-transform: translateY(13px) rotate(45deg);
    -ms-transform: translateY(13px) rotate(45deg);
    -o-transform: translateY(13px) rotate(45deg);
    transform: translateY(13px) rotate(45deg);
  }

  #hamburger-1.is-active .line:nth-child(3) {
    -webkit-transform: translateY(-13px) rotate(-45deg);
    -ms-transform: translateY(-13px) rotate(-45deg);
    -o-transform: translateY(-13px) rotate(-45deg);
    transform: translateY(-13px) rotate(-45deg);
  }
`;
