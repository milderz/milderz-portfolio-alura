import styled from "styled-components";

export const StyledSkillsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23.6rem, 1fr));
  grid-auto-rows: 18rem;
  grid-gap: 3.4rem;

  .skill-card {
    background-color: #25262b;
    border: 1px solid #373a40;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.2s ease;

    .card-title {
      font-weight: 600;
      font-size: 1.4rem;
    }

    svg {
      transform: scale(0.6);
      fill: var(--white);
      transition: fill 0.2s ease;
    }

    :hover {
      border: 1px solid var(--green);

      .card-title {
        color: var(--green);
      }
      svg {
        fill: var(--green);
      }
    }
  }
`;
