import styled from "styled-components";

export const Container = styled.form`
  width: 34.375rem;
  height: 36.25rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: center;
  margin: 10vh auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  background: var(--blue-main);
  color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  backdrop-filter: blur(2px);

  /* gap: 1.75rem;

  border: 2px solid #d3d3d3c1;
  border-radius: 0.25rem;
  background: #d3d3d3c1;
  padding: 2rem;
  margin: 5rem auto; */

  /* label {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-weight: 700;
  } */

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    border: 0;
    padding: 0.75rem 2rem;
    margin: 20px;
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;

    width: 276px;
    height: 48px;

    background: var(--orange-main);
    border-radius: 10px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
      background: #ffffff;
      color: #535353;
    }
  }

  h2 {
    background: #ffffff;
    color: var(--orange-main);
    height: 2rem;
    width: 29.25rem;
    font-family: Montserrat;
    font-size: 1.125rem;
    font-weight: bold;
    font-style: normal;
    text-align: center;
    line-height: 2rem;
    margin: 2rem 1.5rem 0 1.5rem;
    border-radius: 1.25rem;
  }

  h3 {
    margin: 2.5rem;
    font-family: Montserrat;
    font-size: 1.125rem;
  }

  .confirmMeetingModal {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;      

      li {
        margin: 0rem 1.5rem 1rem 5rem;
        font-family: Calibri;
        font-weight: normal;
        font-style: normal;
      }
  }

  .closeModalIcon {
    display: flex;
    position: absolute;
    top: -10px;
    right: -10px;
    background: #FFFFFF;
    border-radius: 50px;
    cursor: pointer;
  }
`
