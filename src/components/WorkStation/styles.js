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
    width: 100%;
    margin-bottom: -1rem;
    z-index: 100;
    position: relative;
    cursor: pointer;

    .teste {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      cursor: not-allowed;
      background: grey;
      text-align: center;
    }

    .circle {
      border-radius: 20%;
      height: 2rem;
      width: 2rem;
      text-align: center;
    }

    .circle.up {
      background: grey;
    }

    .circle.down {
      background: grey;
      margin-top: -1.8rem;
      margin-bottom: 0.75rem;
    }

    .circle.down.occupied,
    .circle.up.occupied {
      background: var(--orange-subtle);
    }

    .circle.up.unoccupied,
    .circle.down.unoccupied {
      background: var(--green);
    }

    .circle.ocupado {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background: var(--orange-subtle);
      margin-right: 0.25rem;
    }

    .circle.livre {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background: var(--green);
      margin-right: 0.25rem;
    }
  }
`
