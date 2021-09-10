import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 9.7rem 1fr 22rem;
  grid-template-rows: 50vh 50vh;
  grid-template-areas:
    'navbar main calendar'
    'navbar main notification';
`
