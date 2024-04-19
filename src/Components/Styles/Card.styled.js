import styled from "styled-components";

export const StyledCard = styled.article`
  .thumbnail {
    img {
      border-radius: 0.8rem 0.8rem 0 0;
      width: 100%;
      height: 15.1rem;
      object-fit: cover;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    background-color: #25262b;
    border-bottom: 1px solid #909296;
    padding: 1.8rem;

    p {
      font-size: 1.4rem;
      color: var(--white);
    }
  }

  .tags {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 1.8rem;
    background-color: #25262b;
    border-bottom: 1px solid #909296;

    p {
      font-size: 1.2rem;
      color: var(--white);
      font-weight: 800;
    }

    .tags-container {
      display: flex;
      gap: 1.2rem;
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
  }

  .btn-container {
    padding: 1.8rem;
    background-color: #25262b;
    border-radius: 0 0 0.8rem 0.8rem;

    a {
      display: inline-flex;
      height: 3rem;
      background-color: var(--green);
      width: 100%;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--black);
      border-radius: 0.6rem;
      justify-content: center;
      align-items: center;

      :hover {
        background-color: #1dbb9e;
      }
    }
  }
`;
