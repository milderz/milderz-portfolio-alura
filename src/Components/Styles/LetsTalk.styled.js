import styled from "styled-components";

export const StyledLetsTalk = styled.div`
  .mail-link {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: var(--text-sm);
    color: var(--white);

    svg {
      color: var(--green);
    }

    :hover {
      color: var(--green);
      text-decoration: underline;
    }
  }
`;
