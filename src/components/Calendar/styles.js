import styled from 'styled-components'
import 'react-calendar/dist/Calendar.css'

export const Container = styled.div`
  grid-area: calendar;
  background: #707070;
  border-radius: 2rem;
  margin: 2rem auto;
  padding: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  h3 {
    margin: 0 0 1.5rem 0.75rem;
    color: #f9f9f9;
    font-weight: 700;
    font-size: 1rem;
    margin-right: auto;
  }

  .calendario {
    border-radius: 0.5rem;

    abbr {
      text-decoration: none;
    }

    button {
      padding: 0.25rem;
    }
  }

  .day {
    border-radius: 0.25rem;
    height: 1.75rem;
    font-weight: 700;
  }
`
