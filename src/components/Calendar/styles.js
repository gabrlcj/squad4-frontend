import styled from 'styled-components'
import 'react-calendar/dist/Calendar.css'

export const Container = styled.div`
  grid-area: calendar;
  background: #fff;
  color: var(--orange-main);
  border-radius: 2rem;
  margin: 0.5rem auto 0;
  padding: 1rem;
  width: 20rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

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

    div {
      background: white;
      padding: 1rem 0.35rem;
      border-radius: 1rem;
      margin: 0 0.5rem;
    }
  }

  .calendario {
    height: 10rem;
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
