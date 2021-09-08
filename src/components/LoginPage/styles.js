import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d3d3d3c1;
  /* width: min(1080px, 90%); */

  .left {
    background: #f0edec;
    width: 50%;
    height: 500px;
  }

  .right {
    background: #cbcbcb;
    width: 50%;
    height: 500px;
    padding: 100px 250px 170px;
    justify-content: center;
    align-items: center;
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
    text-align: left;
  }

  .basetext {
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
    border-radius: 1.25rem;
    font-weight: 700;
    background: var(--background);
    width: 170px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
