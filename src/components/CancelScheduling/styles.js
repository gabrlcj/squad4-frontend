import styled from 'styled-components'

export const Container = styled.form`
  width: 36rem;
  height: 41rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  background: var(--blue-main);
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3rem;
  backdrop-filter: blur(2px);

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;
    padding: 0.75rem 2rem;
    margin: 1.5rem;
    font: 700 1.5rem 'Montserrat', sans-serif;
    color: #fff;

    width: 20rem;
    height: 3.5rem;

    background: var(--orange-main);
    border-radius: 0.75rem;

    transition: all 0.2s;

    &:hover {
      background: var(--orange-lighter);
      transform: translateY(-15%);
    }
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;

    background: #ffffff;
    color: var(--orange-main);
    height: 4rem;
    width: 29.25rem;
    font: 800 1.25rem 'Montserrat', sans-serif;
    text-align: center;
    line-height: 2rem;
    margin: 2rem 1.5rem 0;
    border-radius: 1.25rem;
  }

  h3 {
    margin: 2rem 2.5rem;
    font: 700 1.15rem 'Montserrat', sans-serif;
  }

  .confirmMeetingModal {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem;

    li {
      margin: 0rem 1.5rem 1rem 5rem;
      font: 400 1.15rem 'Calibri', sans-serif;

      &::marker {
        font-size: 1.25rem;
      }
    }
  }

  .closeModalIcon {
    display: flex;
    position: absolute;
    top: -10px;
    right: -10px;
    background: #ffffff;
    border-radius: 50px;
    cursor: pointer;
  }
`
