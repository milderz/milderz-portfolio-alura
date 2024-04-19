import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 15rem;
  background-color: var(--green);

  .content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: auto;
    max-width: 111rem;

    @media screen and (max-width: 1280px) {
      width: 90%;
    }
  }

  .social-links {
    display: flex;
    justify-content: end;

    li {
      a {
        margin: 0.9rem;

        svg {
          height: 2.1rem;
          color: var(--text-black);
          transition: color 0.2s ease;
        }

        :hover {
          svg {
            color: var(--text-gray);
          }
        }
      }
    }
  }
`;
