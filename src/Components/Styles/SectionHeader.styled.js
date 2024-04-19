import styled from "styled-components";

export const StyledSectionHeader = styled.header`
  padding: 7.2rem 0 3.8rem 0;

  .headline {
    font-size: 1.8rem;

    color: var(--green);
    padding-bottom: 1.4rem;
  }

  opacity: ${({ inView }) => (inView ? "1" : "0")};
  transition: opacity 0.9s ease;
`;
