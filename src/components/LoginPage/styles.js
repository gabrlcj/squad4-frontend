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
    width: 14.5625rem;
    justify-content: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 22px;
    letter-spacing: 0.005em;
    text-align: left;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #36357e;
    width: 30rem;
    height: 35rem;
    border-radius: 40px 0px 0px 40px;

    img {
      margin: 0 0.5rem;
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
    padding: 140px 250px;
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
    color: #fe5517;
  }

  .textbox-input {
    width: 276px;
    height: 48px;

    background: #ffffff;
    border: 2px solid var(--orange-main);
    box-sizing: border-box;
    border-radius: 10px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.005em;
    text-align: left;
    padding-left: 7px;

    color: #707070;
  }

  .text-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 14.5625rem;
    justify-content: center;
    text-align: left;
  }

  .basetext {
    display: flex;
    width: 14.5625rem;
    justify-content: center;
    font-size: 12px;
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

    width: 276px;
    height: 48px;

    background: #fff;
    border-radius: 10px;

    transition: all 0.2s;

    &:hover {
      color: #fff;
      background: var(--orange-lighter);
    }
  }
`
