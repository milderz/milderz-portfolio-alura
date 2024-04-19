import styled from "styled-components";

export const StyledButton = styled.div`
  .link {
    height: ${({ size }) =>
      size === "normal" ? "4.2rem" : size === "small" ? "3.2rem" : "4.2rem"};
    border-radius: 0.8rem;

    background-color: ${({ version }) =>
      version === "black"
        ? "#25262b"
        : version === "mint"
        ? "var(--green)"
        : "#fff"};

    color: ${({ version }) =>
      version === "black"
        ? "var(--white)"
        : version === "mint"
        ? "var(--black)"
        : "#fff"};

    padding: ${({ size }) =>
      size === "normal"
        ? "0 3.2rem"
        : size === "small"
        ? "0 1.6rem"
        : "0 3.2rem"};
    font-size: ${({ size }) =>
      size === "normal" ? "1.6rem" : size === "small" ? "1.2rem" : "1.6rem"};
    border-radius: 0.8rem;

    font-weight: 700;
    display: inline-flex;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;
    border: ${({ version }) =>
      version === "black"
        ? "1px solid #373a40"
        : version === "mint"
        ? "transparent"
        : "none"};
    cursor: pointer;

    :hover {
      background-color: ${({ version }) =>
        version === "black"
          ? "#33343c"
          : version === "mint"
          ? "#1dbb9e"
          : "none"};
    }
  }
`;
