import styled from 'styled-components'

export const Container = styled.form`
  width: 35rem;
  height: 35rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3rem;
  backdrop-filter: blur(2px);

  h2 {
    margin: 5px 0 15px 0;

    font: 700 1.5rem 'Montserrat', sans-serif;
    line-height: 22px;

    color: var(--blue-main);
  }

  .regbox,
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin: auto;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;
    padding: 0.75rem 2rem;
    margin: 20px;
    font: 700 1rem 'Montserrat', sans-serif;
    color: #fff;

    width: 20rem;
    height: 3rem;

    background: var(--blue-main);
    border-radius: 0.75rem;

    transition: all 0.2s;

    &:hover {
      background: var(--blue-lighter);
      transform: translateY(-15%);
    }
  }

  .basetext {
    font-size: 0.75rem;
    margin: 0 0.15rem 0.15rem;
  }

  .green {
    font-weight: bolder;
    color: var(--green);
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
    background: #ffffff;
    border-radius: 50px;
    cursor: pointer;
  }

  .textbox-input {
    background: #fff;
    border: 1px solid var(--blue-main);
    border-radius: 10px;

    font: 400 0.85rem 'Calibri', sans-serif;
    line-height: 17px;
    text-align: left;
    padding-left: 7px;

    color: var(--text);

    &:focus {
      outline: none;
      box-shadow: 0 0 0.25rem 0.2rem var(--blue-subtle);
    }

    &::placeholder {
      color: var(--blue-main);
    }
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
