import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 9.7rem 1fr 22rem;
  grid-template-rows: 55vh 45vh;
  grid-template-areas:
    'navbar main calendar'
    'navbar main notification';

  .background-calendar {
    background: var(--blue-darker);
    border-radius: 2rem 0 0 0;
  }

  .background-notification {
    background: var(--blue-darker);
    border-radius: 0 0 0 2rem;
  }
`
