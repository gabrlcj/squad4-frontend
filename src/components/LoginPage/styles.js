import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 .25rem .25rem rgba(0, 0, 0, 0.25));

  .underline {
    text-decoration: underline;
    padding-left: 0.2rem;
  }

  .title {
    display: flex;
    justify-content: center;
    width: 15rem;

    font: 700 1.25rem 'Montserrat', sans-serif;
    line-height: 1.375rem;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--blue-main);
    width: 30rem;
    height: 35rem;
    border-radius: 2.5rem 0 0 2.5rem;

    img {
      margin: 0;
      position: static;
      width: auto;
      height: auto;
      padding: 0;
      margin: 0;
      overflow: visible;
      clip: auto;
      white-space: normal;
    }

    @media (max-width: 61.25rem) {
      position: absolute;
      width: 0.063rem;
      height: 0.063rem;
      padding: 0;
      margin: -0.063rem;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;

      img {
        position: absolute;
        width: 0.063rem;
        height: 0.063rem;
        padding: 0;
        margin: -0.063rem;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }
    }
  }

  .right {
    background: #ffffff;
    width: 30rem;
    height: 35rem;
    padding: 8.75rem 12.5rem;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-radius: 0 0 2.5rem 0;
  }

  .loginbox,
  form {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--orange-main);
  }

  .textbox-input {
    width: 17.25rem;
    height: 3rem;

    background: #ffffff;
    border: 0.125rem solid var(--orange-main);
    box-sizing: border-box;
    border-radius: 0.625rem;

    font: 400 1rem 'Calibri', sans-serif;
    line-height: 1.125rem;
    text-align: left;
    padding-left: 0.438rem;

    color: var(--text);
  }

  .text-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 15rem;
    justify-content: center;
    text-align: left;
  }

  .basetext {
    display: flex;
    width: 15rem;
    justify-content: center;
    font-size: 0.75rem;
    margin: 0.125rem 0;

    p {
      color: #707070;
    }
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: -13vh 0 5vh 0;
  }

  button {
    border: 0;
    padding: 0.75rem 2rem;
    margin: 1.25rem;
    font-weight: 700;
    color: var(--orange-main);
    border: 0.125rem solid var(--orange-main);

    width: 17.25rem;
    height: 3rem;

    background: #fff;
    border-radius: 0.625rem;

    transition: all 0.2s;

    &:hover {
      color: #fff;
      background: var(--orange-lighter);
    }
  }
`
