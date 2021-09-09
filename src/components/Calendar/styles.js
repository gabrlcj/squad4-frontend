import styled from 'styled-components'
import 'react-calendar/dist/Calendar.css'

export const Container = styled.div`
  grid-area: calendar;
  background: #707070;
  border-radius: 2rem;
  margin: 0.5rem auto 0;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  h5 {
    margin: 0 0 1.5rem 0.75rem;
    color: #f9f9f9;
    font-weight: 800;
    font-size: 1rem;
    margin-right: auto;
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
    height: 11rem;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;

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
