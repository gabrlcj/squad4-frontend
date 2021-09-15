import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 9.7rem 1fr 20rem;
  grid-template-rows: 50vh 50vh;
  grid-template-areas:
    'navbar main calendar'
    'navbar main notification';

  .background-calendar {
    background: var(--blue-darker);
    border-radius: 2rem 0 0 0;
    margin-left: -0.5rem;
  }

  .background-notification {
    background: var(--blue-darker);
    border-radius: 0 0 0 2rem;
    margin-left: -0.5rem;
  }

  @media (max-width: 1080px) {
    grid-template-columns: 5rem 1fr 17rem;
  }
`
