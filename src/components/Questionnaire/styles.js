import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: min(1024px, 90%);
  min-height: 100vh;
  background: #DAD8D7;

  .window {
    margin: auto;
    margin-top: 6.875rem;
    margin-bottom: 6.875rem;
    background: #F0EDEC;
    width: 70rem;
    height: 50rem;

    .title {
      padding-top: 1.875rem;
      padding-left: 5.313rem;
      font-weight: 700;
      font-style: normal;
      line-height: 2rem;

      h1 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1.125rem;
      }

    }
  }
  
  .box {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    /* padding-top: 2.813rem; */

    .box-question div {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      align-content: center;
      justify-content: space-between;
      width: 70%;
      padding-top: 0.625rem;
      padding-left: 20%;
    }

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
    padding-right: 2rem;
    margin-left: 15.938rem;
  }

  .right {
    width: 40%;
    padding-left: 2rem;
    margin-right: 15.938rem;
  }

  .question {
    width: 27.19rem;
    height: 5.313rem;
    margin-top: 2.813rem;
    padding-top: 2rem;
    text-align: center;
    font-size: 1.125rem;
    font-weight: 700;
    font-style: normal;
    background: #C4C4C4;
  }

  button {
    border: 0;
    border-radius: 0.625rem;
    padding: 0.75rem 2rem;
    /* margin: 10px; */
    font-weight: 700;
    background: #535353;
    color: #ffffff;
    width: 10.625rem;
    float: right;
    margin-top: 4.375rem;
    margin-right: 6rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
      background: #ffffff;
      color: #535353;
    }
  }
`;
