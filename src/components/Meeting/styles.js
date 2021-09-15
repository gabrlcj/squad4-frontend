import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1rem 0;
  color: white;

  .orange {
    background-color: var(--orange-main);
  }
`

export const TimeBlock = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    border-radius: 40px;
    width: 18.2rem;
    height: 2.5rem;
    background-color: var(--blue-darker);
    text-align: center;
    padding-top: 0.5rem;
  }

  .overlay {
    width: 35rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-left: 18%;
  }

`

export const RoomBlock = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    border-radius: 40px;
    width: 11.25rem;
    height: 2.5rem;
    background-color: var(--blue-darker);
    text-align: center;
    padding-top: 0.5rem;
  }

  .hidden {
    visibility: hidden;
  }

`

export const TimeContainer = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
  grid-template-columns: 1fr 1fr;
  background-color: #7474b445;
  padding: 2rem 2.5rem;
  border-radius: 1.5rem;
  /* min-height: 20rem; */
`

export const Display = styled.div`
  text-align: center;
  background-color: var(--blue-lighter);
  margin-bottom: ${(props) => props.marginBottom || '.5rem'};
  padding: ${(props) => props.padding || '.5rem'};
  border-radius: 1rem;
  cursor: pointer;
`

export const RoomContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  background-color: rgba(116, 116, 180, 0.27);
  padding: 2rem 2.5rem;
  border-radius: 1.5rem;
  /* min-height: 20rem; */
`
