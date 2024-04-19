import styled from "styled-components";

export const StyledLabel = styled.div`
  height: 1.8rem;
  font-size: 1rem;

  background-color: ${({ color }) => color};

  border-radius: 0.8rem;
  padding: 0 1.2rem;
  display: grid;
  place-content: center;
  text-transform: uppercase;

  p {
    color: var(--black);
    font-size: 1rem;
    font-weight: 800;
  }
`;
