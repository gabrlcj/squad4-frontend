import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  .rec {
    width: 100%;
    padding: 0;
    margin: 0;

    button {
      border-radius: 100%;
      width: 0.75rem;
      height: 0.75rem;
      padding: 0;
      border: 0;
      background: #c4c4c4;

      &:hover {
        box-shadow: 0 0 1px 3px var(--orange-lighter);
      }
    }

    .rec.rec-dot_active {
      background: var(--orange-lighter);
      box-shadow: 0 0 1px 3px var(--orange-lighter);
    }

    .rec.rec-arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--blue-subtle);
      height: 4rem;
      width: 4rem;
      margin: 0 0.5rem;

      &:hover {
        box-shadow: 0 0 1px 3px var(--blue-main);
        color: #121212;
      }
    }

    .rec.rec-pagination {
      display: none;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      margin: 1rem 0;
    }
  }
`

export const Station = styled.div`
  margin: 2rem 0;

  .chairs {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-bottom: -1rem;
    z-index: 0;
    position: relative;
    cursor: pointer;

    .unavailable {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      cursor: not-allowed;
      background: #707070;
      text-align: center;
    }

    .circle {
      border-radius: 20%;
      height: 2rem;
      width: 2rem;
      text-align: center;

      box-shadow: 0 0.15rem 0.3rem 0 #333333;
    }

    .circle.up {
      background: grey;
    }

    .circle.down {
      background: grey;
      margin-top: -2rem;
      margin-bottom: 1rem;
    }

    .circle.down.occupied,
    .circle.up.occupied,
    .circle.up.occupied.busy,
    .circle.down.occupied.busy {
      background: var(--orange-subtle);
    }

    .circle.down.occupied.busy.occupiedChair,
    .circle.up.occupied.busy.occupiedChair {
      background: var(--orange-lighter);
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

  .table {
    width: min(25rem, 100%);
  }
`
