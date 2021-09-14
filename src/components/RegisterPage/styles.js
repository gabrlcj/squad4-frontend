import styled from "styled-components";

export const Container = styled.form`
  width: 564px;
  height: 510px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: center;
  margin: 3vh auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

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

  .regbox, form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    border: 0;
    padding: 0.75rem 2rem;
    margin: 20px;
    font-weight: 700;
    color: #ffffff;

    width: 276px;
    height: 48px;

    background: #36357E;
    border-radius: 10px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
      background: #ffffff;
      color: #535353;
    }
  }
  
  .green{
    font-weight: bold;
    color: green;
    }

    .row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  }

  /* .column {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    flex: 2;
  }  */

  .textbox-input {
    background: #FFFFFF;
    border: 1px solid #36357E;
    box-sizing: border-box;
    border-radius: 10px;
    
    font-family: Calibri;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.005em;
    text-align: left;

    color: #707070;
  }

  .namebox {
    width: 228px;
    height: 48px;
  }

  .rolebox {
    width: 164px;
    height: 48px;
  }

  .emailbox {
    width: 407px;
    height: 48px;
  }

  .passwordbox {
    width: 196px;
    height: 48px;
  }
`
