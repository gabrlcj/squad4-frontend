import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: #d3d3d3c1;
  width: min(1024px, 90%);
  min-height: 100vh;

  .underline {
    text-decoration: underline;
    padding-left: 0.2rem;
  }

  .title {
    display: flex;
    width: 14.5625rem;
    justify-content: center;
    font-size: 1.25rem;
  }

  .left {
    background: #f0edec;
    width: 50%;
    height: 500px;
  }

  .right {
    background: #cbcbcb;
    width: 50%;
    height: 500px;
    padding: 150px 250px;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .loginbox {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30%;
  }

  .text-box {
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
  }

  /* label {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-weight: 700;
  } */

  button {
    border: 0;
    padding: 0.75rem 2rem;
    margin: 10px;
    border-radius: 0.625rem;
    font-weight: 700;
    background: #535353;
    color: #ffffff;
    width: 170px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
      background: #ffffff;
      color: #535353;
    }
  }
`
