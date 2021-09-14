import styled from 'styled-components'
import SelectArrow from '../../assets/Select-arrow.svg'

export const Container = styled.main`
  grid-area: main;
  padding: 0.5rem 1.5rem;
  background: #fff;

  .brand-container {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 2rem;
  }

  .selection-bar {
    margin-top: 1rem;
    width: 100%;
    border-radius: 1rem;

    display: flex;
    align-items: center;

    select {
      font: 700 0.85rem 'Montserrat', sans-serif;
      margin-right: 0.5rem;
      padding: 0 1.5rem;
      width: 185px;
      height: 40px;
      border: 0;
      background: transparent;
      color: #fff;
      background: url(${SelectArrow}) no-repeat;
      background-position: 9.2rem;
      background-color: var(--blue-darker);
      border-radius: 3rem;
      outline: none;

      -webkit-appearance: none;
      -moz-appearance: none;

      &:focus {
        box-shadow: 0 0 0.5rem 0.1rem var(--blue-lighter);
      }

      & + select {
        width: 245px;
        background-position: 13rem;
      }

      option {
        background-color: var(--blue-darker);
      }
    }
  }

  section {
    margin-top: 1rem;
    border: 3.2px solid var(--blue-darker);
    border-radius: 2rem;

    h2 {
      font-size: 1rem;
      padding: 1rem;
      color: #fff;
      background: var(--blue-darker);
      border-radius: 1.5rem 1.5rem 0 0;
      text-align: center;
    }
  }

  .legenda {
    display: flex;
    align-items: center;
    justify-content: left;
    margin-left: 1rem;

    strong {
      display: flex;
      align-items: center;
      flex-direction: row;
      margin: 0 1rem;
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

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 1rem 0;

    button {
      color: white;
      background: var(--orange-main);
      border-radius: 1rem;
      border: 0;
      width: 8rem;
      padding: 0.5rem 1rem;
      font: 800 1rem 'Montserrat', sans-serif;

      transition: all 0.2s;
    }

    .selected {
      background-color: var(--blue-darker);
    }
  }
`
