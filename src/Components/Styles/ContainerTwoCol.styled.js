import styled from "styled-components";

export const ContainerTwoCol = styled.section`
  display: flex;
  min-height: 58.7rem;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media screen and (max-width: 750px) {
      align-items: center;
    }
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    gap: 7.2rem;
  }

  .form-sent {
    flex: 1;
    background-color: var(--bg-light-gray);
    height: 38.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.6rem;
    border-radius: 0.8rem;
    border: 1px solid #373a40;

    .form-sent-message {
      font-size: var(--text-md);
    }
    svg {
      height: 4.6rem;
      color: var(--white);
    }
  }

  @keyframes fadeIn {
  }
`;
