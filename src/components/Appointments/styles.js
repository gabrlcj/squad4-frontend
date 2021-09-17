import styled from 'styled-components'

export const Container = styled.div`
  grid-area: appointments;
  background: #fff;
  color: var(--orange-main);
  border-radius: 2rem;
  margin: 0.75rem auto 0;
  padding: 0.75rem 1rem;
  width: 18rem;
  height: 24rem;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.25rem;
  flex-direction: column;

  @media (max-width: 1080px) {
    width: 15rem;
  }

  h4 {
    width: 100%;
    text-align: center;
    line-height: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 800;
    color: var(--blue-darker);
  }

  h5 {
    margin: 0 0.5rem 1rem;
    font-weight: 700;
    font-size: 1rem;
    margin-right: auto;
  }

  .appointments {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 70%;
    overflow-x: hidden;
    cursor: pointer;

    .appointment-date {
      color: #fff;
      background: var(--orange-main);
      padding: 1rem 0.35rem;
      border-radius: 1rem;
      width: 100%;
      height: 3.25rem;
      margin-bottom: 1rem;
      text-align: center;

      display: flex;
      align-items: center;
      justify-content: space-around;
      transition: all ease-in-out 0.3s;

      .cancel {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }
    }

    .cancel-button {
      transition: all ease-in-out 0.3s;
      transform: translateX(-40%);
      position: relative;

      .cancel {
        position: absolute;
        right: -6rem;
        width: auto;
        height: auto;
        padding: 0;
        margin: 0;
        overflow: visible;
        clip: auto;
        white-space: normal;
        cursor: pointer;
      }
    }
  }
`
