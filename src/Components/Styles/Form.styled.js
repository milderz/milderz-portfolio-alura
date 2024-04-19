import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  input,
  textarea {
    width: 100%;
    background-color: var(--bg-light-gray);
    border: 0.2rem solid #373a40;
    border-radius: 0.8rem;
    font-size: var(--text-sm);
    color: var(--white);
    padding: 1.6rem;
    transition: border 0.2s ease;

    :focus {
      outline: none;
      border: 0.2rem solid var(--green);
    }
  }
  .form-input {
    input {
      height: 5.6rem;
    }
  }
  .form-input-description {
    textarea {
      height: 11.2rem;
      resize: none;
    }
  }

  .submit-form-button {
    height: 5.6rem;
    background-color: var(--green);

    border: 1px solid #373a40;
    cursor: pointer;
    color: var(--text-black);
    font-size: var(--text-sm);
    font-weight: 600;
    border-radius: 0.8rem;
    transition: background-color 0.2s ease;

    svg {
      margin-right: 1.6rem;
    }

    :hover {
      background-color: #1dbb9e;
    }
  }

  .input-invalid {
    position: relative;
    ::after {
      content: "This field cannot be empty";
      position: absolute;
      top: 1.6rem;
      right: 1.6rem;
      color: var(--red);
    }

    input,
    textarea {
      border: 0.2rem solid var(--red);
    }
  }
`;
