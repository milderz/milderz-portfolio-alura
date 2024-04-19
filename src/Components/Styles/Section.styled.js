import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: var(--bg-gray);
  background-color: ${({ bgColor }) =>
    bgColor === "black"
      ? "var(--bg-black)"
      : bgColor === "gray"
      ? "var(--bg-gray)"
      : "none"};
  .content {
    width: 80%;
    margin: auto;
    max-width: 111rem;
    padding-bottom: 7.2rem;

    @media screen and (max-width: 1280px) {
      width: 90%;
    }
  }
`;
