import styled from 'styled-components'
import 'react-calendar/dist/Calendar.css'

export const Container = styled.div`
  grid-area: calendar;
  background: #fff;
  color: var(--orange-main);
  border-radius: 2rem;
  margin: 0.5rem auto 0;
  padding: 0.75rem 1rem;
  width: 20rem;
  height: 97%;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 18rem;
  }

  .background-calendar {
    background: var(--blue-darker);
    border-radius: 1.75rem 0 0 0;
  }

  h5 {
    margin: 0 0 0.5rem 0.75rem;
    font-weight: 800;
    font-size: 1rem;
    margin-right: auto;
  }

  h4 {
    width: 100%;
    border-radius: 1rem;
    text-align: center;
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
    background: var(--blue-darker);
    color: #fff;
  }

  .appointments {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .rec {
      width: 100%;
      height: 3.5rem;
      padding: 0;
      margin: 0;

      button {
        border-radius: 100%;
        width: 0.75rem;
        height: 0.75rem;
        padding: 0;
        border: 0;
        margin-top: 0.85rem;

        &:hover {
          box-shadow: 0 0 1px 3px var(--orange-lighter);
        }
      }

      .rec.rec-dot_active {
        background: var(--orange-lighter);
        box-shadow: 0 0 1px 3px var(--orange-lighter);
      }

      .rec.rec-arrow {
        display: none;
      }

      .rec.rec-pagination {
        position: static;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
    }

    .appointment-date {
      color: #fff;
      background: var(--orange-main);
      padding: 1rem 0.35rem;
      border-radius: 1rem;
      margin: 0 0.5rem;
      width: 100%;
      height: 3.25rem;
      text-align: center;
    }
  }

  .calendario {
    height: 9rem;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    border: 0;

    abbr {
      text-decoration: none;
    }

    button {
      padding: 0.25rem;
    }
  }

  .day {
    border-radius: 0.25rem;
    height: 1.5rem;
    font-weight: 700;
  }
`
