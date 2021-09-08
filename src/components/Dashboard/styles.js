import styled from 'styled-components'

export const Container = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 9.7rem 1fr 26rem;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'navbar main calendar'
    'navbar main notification';
`
