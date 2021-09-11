import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 76.5rem;
  height: auto;
  background: #F0EDEC;

  .box {
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    height: 500px;

    input[type="radio"], label{
      display: inline;
      margin: auto 0;
    }
    label {
      line-height: 2;
      cursor: pointer;
      }

    /* Checked */
    input[type="radio"]:checked + label {
      color: #FE5517;
    }

    /* Transition */
    label,
    label::before {
      transition: .25s all ease;
    }

  }

  .left {
    width: 40%;
    height: 21.88rem;

    .box-question div {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      align-content: center;
      justify-content: space-between;
      width: 50%;
    }

  }

  .right {
    width: 40%;
    height: 21.88rem;

    .box-question div {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      align-content: center;
      justify-content: space-between;
      width: 50%;
    }

  }

  .question {
    width: 27.19rem;
    height: 5.313rem;
    /* margin-top: 3.125rem; */
    padding-top: 2rem;
    text-align: center;
    background: #C4C4C4;
  }

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
`;
