import styled from 'styled-components'
import SelectArrow from '../../assets/Select-arrow.svg'
import 'react-datepicker/dist/react-datepicker.css'

export const Container = styled.div`
  .input-data {
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
`
