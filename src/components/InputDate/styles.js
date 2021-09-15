import styled from 'styled-components'
import SelectArrow from '../../assets/Select-arrow.svg'
import 'react-datepicker/dist/react-datepicker.css'

export const Container = styled.div`
  .react-datepicker {
    background: var(--orange-subtle);
    border-radius: 1rem;
    border: 0;
    font: 700 0.85rem 'Montserrat', sans-serif;
    height: fit-content;

    .react-datepicker__triangle {
      background: var(--orange-subtle);

      &::after {
        border-bottom-color: var(--orange-subtle);
      }

      &::before {
        top: 0;
        border-bottom-color: var(--orange-subtle);
      }
    }

    .react-datepicker__header {
      border-radius: 1rem;
      background: var(--orange-subtle);
      border: 0;

      .react-datepicker__current-month {
        color: var(--blue-main);
      }

      .react-datepicker__day-names {
        .react-datepicker__day-name {
          color: #fff;
          font-size: 0.75rem;
        }
      }
    }

    .react-datepicker__month {
      margin: 0 0.2rem 0.1rem;

      .react-datepicker__week {
        border-radius: 0.25rem;

        .react-datepicker__day {
          color: #fff;
          transition: all 0.2s;

          &:hover {
            filter: opacity(1.2);
            background: var(--orange-main);
          }
        }

        .react-datepicker__day--disabled {
          filter: opacity(0.3);
          background: rgba(0, 0, 0, 0.2);
          cursor: not-allowed;

          &:hover {
            filter: opacity(0.3);
            background: rgba(0, 0, 0, 0.2);
          }
        }

        .react-datepicker__day--selected {
          background-color: var(--orange-main);
        }
      }
    }
  }

  .input-data {
    text-align: left;
    font: 700 0.85rem 'Montserrat', sans-serif;
    padding: 0 1.5rem;
    width: 115px;
    height: 40px;
    border: 0;
    background: transparent;
    color: #fff;
    background: url(${SelectArrow}) no-repeat;
    background-position: 5rem;
    background-color: var(--blue-darker);
    border-radius: 3rem;
    outline: none;
    margin-top: 0;

    position: relative;
    z-index: 100;

    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
      box-shadow: 0 0 0.5rem 0.1rem var(--blue-lighter);
    }

    &::placeholder {
      color: #fff;
    }
  }
`
