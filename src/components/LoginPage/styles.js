import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */

  border: 2px solid #d3d3d3c1;
  border-radius: 0.25rem;
  background: #d3d3d3c1;
  /* padding: 2rem; */
  margin: 5rem auto;
  width: min(1080px, 90%);

  .left {
    background: #f0edec;
    width:50%;
    height:600px;
  }

  .right {
    background: #cbcbcb;
    width:50%;
    height:600px;
    /* flex-direction: column; */
  }

  .loginbox {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30%;
  }

  .basetext {
    font-size: 12px;
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
`
