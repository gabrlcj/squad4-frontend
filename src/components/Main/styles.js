import styled from 'styled-components'
import SelectArrow from '../../assets/Select-arrow.svg'

export const Container = styled.main`
  grid-area: main;
  padding: 2.5rem 1.5rem;
  background: #fff;

  @media (max-width: 1080px) {
    padding: 1.5rem;
  }

  .brand-container {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 2rem;
    position: relative;

    .help {
      position: absolute;
      top: 0;
      right: 1.5rem;
    }
  }

  .selection-bar {
    margin-top: 1.5rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 1080px) {
      justify-content: left;
    }

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
      background-position: 9.3rem;
      background-color: var(--blue-darker);
      border-radius: 3rem;
      outline: none;
      cursor: pointer;

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
        background-color: var(--orange-subtle);
        font: 700 0.85rem 'Montserrat', sans-serif;
      }
    }
  }

  section {
    margin-top: 2.5rem;
    border: 3px solid var(--blue-darker);
    border-radius: 2rem;

    @media (max-width: 1080px) {
      margin-top: 2rem;
    }

    h2 {
      display: flex;
      align-items: center;
      justify-content: space-around;

      font-size: 1rem;
      padding: 1rem;
      color: #fff;
      background: var(--blue-darker);
      border-radius: 1.5rem 1.5rem 0 0;
      text-align: center;

      strong {
        color: whitesmoke;
        background: var(--green);
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
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
      border: 1px solid #121212;
    }

    .circle.livre {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background: var(--green);
      margin-right: 0.25rem;
      border: 1px solid #121212;
    }

    .circle.livre.blue {
      background: var(--blue-main);
    }
  }

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 1rem 0;

    button {
      margin: 1rem 0;
      color: white;
      background: var(--orange-main);
      border-radius: 1rem;
      border: 0;
      width: 8rem;
      padding: 0.5rem 1rem;
      font: 800 1rem 'Montserrat', sans-serif;

      transition: background-color ease 0.4s;

      &:hover {
        background: var(--orange-lighter);
      }
    }

    .selected {
      background-color: var(--blue-darker);

      &:hover {
        background: var(--blue-main);
      }
    }

    .selectedRoom {
      width: 14rem;
      padding: 1rem;
    }
  }

  .buttons-container.room {
    margin-top: 0.5rem;

    @media (max-width: 1080px) {
      margin-top: 0;
    }
  }
`
