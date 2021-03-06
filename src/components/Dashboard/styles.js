import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 9.7rem 1fr 20rem;
  grid-template-areas:
    'navbar main appointments'
    'navbar main notification';

  .background-appointments {
    background: var(--blue-darker);
    border-radius: 2rem 0 0 0;
    margin-left: -0.5rem;
  }

  .background-notification {
    background: var(--blue-darker);
    border-radius: 0 0 0 2rem;
    margin-left: -0.5rem;

    @media (min-width: 1440px) {
      border-radius: 0 0 2rem 0;
    }
  }

  @media (max-width: 1080px) {
    grid-template-columns: 5rem 1fr 17rem;
  }
`
