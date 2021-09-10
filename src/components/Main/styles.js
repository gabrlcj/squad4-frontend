import styled from 'styled-components'
import SelectArrow from '../../assets/Select-arrow.svg'

export const Container = styled.main`
  grid-area: main;
  padding: 2rem;

  h1 {
    border: 2px solid white;
    width: fit-content;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.4);
  }

  .selection-bar {
    margin-top: 4rem;
    width: 100%;
    background: #a9a9a9;
    border-radius: 1rem;
    padding: 0.25rem;

    display: flex;
    align-items: center;
    justify-content: left;

    select {
      font: 600 0.85rem 'Inter', sans-serif;
      margin: 0 2.5rem 0 1.5rem;
      padding: 0.25rem;
      width: 110px;
      border: 0;
      background: transparent;
      color: #f9f9f9;
      background: url(${SelectArrow}) no-repeat;
      background-position: center right;

      -webkit-appearance: none;
      -moz-appearance: none;

      & + select {
        width: 195px;
      }

      option {
        background: #a9a9a9;
      }
    }
  }

  section {
    margin-top: 2rem;
    border: 1px solid grey;
    border-radius: 1.5rem;

    h2 {
      font-size: 1rem;
      padding: 1rem;
      color: #fff;
      background: grey;
      border-radius: 1.5rem 1.5rem 0 0;
    }
  }

  .legenda {
    display: flex;
    align-items: center;
    justify-content: center;

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

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 1rem 0;

    button {
      color: white;
      background: #a9a9a9;
      border-radius: 1rem;
      border: 0;
      width: 10rem;
      padding: 0.5rem 1rem;
      font: 800 1rem 'Inter', sans-serif;
    }
  }
`
