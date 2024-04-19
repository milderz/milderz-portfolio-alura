import styled from "styled-components";

export const StyledProjectDetailPage = styled.section`
  margin-top: 6.8rem;
  min-height: 100vh;

  .project-detail-header {
    padding: 3.4rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .btns-container {
    display: flex;
    gap: 1.6rem;

    @media screen and (max-width: 415px) {
      flex-direction: column;
    }
  }
  .project-detail-title {
    font-size: var(--text-md);
  }

  .project-detail-image {
    border-radius: 0.8rem;
    margin: 3.4rem 0;
    width: 560px;
    object-fit: cover;

    @media screen and (max-width: 650px) {
      width: 100%;
    }
  }
  .labels {
    display: flex;
    gap: 1.4rem;
    margin: 3.4rem 0;
  }

  .tag {
    height: 1.8rem;
    font-size: 1rem;
    color: var(--black);
    background-color: #01d3f4;
    font-weight: 800;
    border-radius: 0.8rem;
    padding: 0 1.2rem;
    display: grid;
    place-content: center;
    text-transform: uppercase;
  }
`;
