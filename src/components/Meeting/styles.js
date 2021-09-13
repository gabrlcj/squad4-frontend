import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 4rem;
  color: var(--background);
`

export const TimeBlock =  styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    border-radius: 40px;
    width: 16rem;
    height: 2rem;
    background-color: var(--blue-darker);
    text-align:center;
    padding-top: .2rem;
  }

`

export const RoomBlock =  styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    border-radius: 40px;
    width: 11.25rem;
    height: 2rem;
    background-color: var(--blue-darker);
    text-align:center;
    padding-top: .2rem;
  }
  `
