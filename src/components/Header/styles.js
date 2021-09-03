import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--alternative);
  height: 6rem;

  h1 {
    display: flex;
    align-items: center;
    padding: 1.5rem;
  }

  a {
    text-decoration: none;
    color: var(--background);
  }

  a:first-child {
    margin-right: 1rem;
  }
`
