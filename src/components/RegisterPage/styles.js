import styled from "styled-components";

export const Container = styled.form`
  width: 35rem;
  height: 32rem;
  display: flex;
  justify-content: center;
  margin: auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  backdrop-filter: blur(2px);

  h2 {
    margin: 5px 0 15px 0;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.005em;

    color: #36357E;
  }

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
    align-items: center;
    
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
  
  .basetext {
    font-size: 12px;
  }
  
  .green{
    font-weight: bolder;
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

  .column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    padding-left: 7px;

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
