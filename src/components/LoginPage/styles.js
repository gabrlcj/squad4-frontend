import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  border: 2px solid #d3d3d3c1;
  border-radius: 0.25rem;
  background: #d3d3d3c1;
  padding: 2rem;
  margin: 5rem auto;
  width: min(1080px, 90%);

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-weight: 700;

    input {
      padding: 0.5rem 1.5rem;
      border: 0;
      border-radius: 0.25rem;
      outline: transparent;
      margin: 0.5rem 0;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      &:focus {
        background: var(--background-focus);
      }

      &::placeholder {
        font-weight: 700;
      }
    }
  }

  button {
    border: 0;
    padding: 0.75rem 2rem;
    border-radius: 1.25rem;
    font-weight: 700;
    background: var(--background);
    margin: 0.5rem 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
