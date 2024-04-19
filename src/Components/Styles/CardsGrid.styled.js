import styled from "styled-components";

export const StyledCardsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 3.4rem;
  grid-auto-rows: 1fr;

  @media screen and (max-width: 415px) {
    grid-template-columns: 1fr;
  }
`;
