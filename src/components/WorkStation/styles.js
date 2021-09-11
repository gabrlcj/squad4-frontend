import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Station = styled.div`
  margin: 2rem 0;

  .chairs {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 15rem;
    margin-bottom: -1rem;
    z-index: 100;
    position: relative;
    cursor: pointer;

    .circle.up {
      background: grey;
      border-radius: 50%;
      border: 1px solid white;
      height: 2rem;
      width: 2rem;
    }

    .circle.down {
      background: grey;
      border-radius: 50%;
      border: 1px solid white;
      height: 2rem;
      width: 2rem;
      margin-top: -1.5rem;
      margin-bottom: 0.75rem;
    }

    .circle.ocupado {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background: #121212;
      margin-right: 0.25rem;
    }

    .circle.livre {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background: grey;
      margin-right: 0.25rem;
    }
  }
`
