import styled from "styled-components";

export const StyledHero = styled.section`
  height: 69rem;
  display: flex;
  align-items: center;
  width: 80%;
  margin: 6.9rem auto 0 auto;
  max-width: 111rem;
  background-color: var(--bg-black);

  @media screen and (max-width: 1280px) {
    width: 90%;
  }

  @media screen and (max-width: 980px) {
    flex-direction: column-reverse;
    height: 90rem;
    padding-top: 10.9rem;
  }

  .hero-buttons {
    display: flex;
    gap: 1.6rem;

    @media screen and (max-width: 550px) {
      flex-direction: column;
    }
  }

  p {
    padding: 5.8rem 0 4.8rem 0;

    @media screen and (max-width: 550px) {
      padding: 4.8rem 0 4.8rem 0;
    }
  }

  .text-content {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 980px) {
      flex: 1;
      align-items: center;
      text-align: center;
    }
  }

  .profile-img {
    flex: 1;
    flex-shrink: 0;
    background-color: var(--green);

    height: 34rem;
    display: flex;
    align-items: end;
    border-radius: 2rem;
    @media screen and (max-width: 980px) {
      flex: 0.5;
    }

    img {
      @media screen and (max-width: 480px) {
        width: 100%;
      }
    }
  }
`;
