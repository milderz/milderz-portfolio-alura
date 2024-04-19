import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 6.9rem;
  border-bottom: 1px solid #909296;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--bg-black);
  z-index: 1;

  .content {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 111rem;

    @media screen and (max-width: 1280px) {
      width: 90%;
    }
  }
  nav {
    flex: 1;
    ul {
      display: flex;
      align-items: center;
      justify-content: start;
      padding: 0;

      li {
        a {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-gray);
          display: inline-block;
          width: 9.9rem;
          height: 3.4rem;
          border-radius: 0.6rem;
          display: grid;
          place-content: center;
          transition: all 0.2s ease;

          :hover {
            background-color: hsla(169, 83%, 50%, 0.17);
            color: var(--green);
          }
        }
      }
    }

    @media screen and (max-width: 980px) {
      display: ${({ navActive }) => (navActive ? "flex" : "none")};

      position: absolute;
      top: 8.9rem;
      left: 50%;
      width: 70%;
      transform: translateX(-50%);
      background-color: #25262b;
      border: 1px solid #373a40;
      height: 20rem;
      border-radius: 0.9rem;
      color: var(--white);
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease;

      ul {
        flex-direction: column;

        margin: 0;
        padding: 1.6rem;

        li {
          a {
            color: var(--white);
            :hover {
              color: var(--black);
            }
          }
        }
      }
    }

    @media screen and (max-width: 750px) {
      width: 80%;
    }

    @media screen and (max-width: 550px) {
      width: 90%;
    }
  }

  img {
    flex: 1;
  }

  .social-links {
    flex: 1;
    display: flex;
    justify-content: end;
    padding: 0;
    li {
      a {
        margin: 0.9rem;

        svg {
          height: 2.1rem;
          color: var(--text-gray);
          transition: color 0.2s ease;
        }

        :hover {
          svg {
            color: var(--green);
          }
        }
      }
    }
  }
`;
