import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .underline {
    text-decoration: underline;
    padding-left: 0.2rem;
  }

  .title {
    display: flex;
    justify-content: center;
    width: 15rem;

    font: 700 1.25rem 'Montserrat', sans-serif;
    line-height: 22px;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--blue-main);
    width: 30rem;
    height: 35rem;
    border-radius: 40px 0px 0px 40px;

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

    @media (max-width: 980px) {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;

      img {
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
  }

  .right {
    background: #ffffff;
    width: 30rem;
    height: 35rem;
    padding: 140px 200px;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-radius: 0px 0px 40px 0px;
  }

  .loginbox,
  form {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30%;
    color: var(--orange-main);
  }

  .textbox-input {
    width: 276px;
    height: 48px;

    background: #ffffff;
    border: 2px solid var(--orange-main);
    box-sizing: border-box;
    border-radius: 10px;

    font: 400 1rem 'Calibri', sans-serif;
    line-height: 17px;
    text-align: left;
    padding-left: 7px;

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
    margin: 2px 0;

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
    margin: 20px;
    font-weight: 700;
    color: var(--orange-main);
    border: 2px solid var(--orange-main);

    width: 17.25rem;
    height: 3rem;

    background: #fff;
    border-radius: 10px;

    transition: all 0.2s;

    &:hover {
      color: #fff;
      background: var(--orange-lighter);
    }
  }
`
