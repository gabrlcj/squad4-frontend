import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  /* width: min(1080px, 90%); */
  min-height: 100vh;
  /* min-width: 100vw; */
  background: var(--alternative);

  .window {
    /* margin: auto; */
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 65rem;
    height: 55rem;
    background: #ffffff;
    border-radius: 2.5rem 0;

    .title {
      padding-top: 1.875rem;
      padding-left: 5.313rem;
      font-weight: 700;
      font-style: normal;
      line-height: 2rem;
      color: var(--orange-main);

      h1 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1.125rem;
      }

    }
  }
  
  .box, .box .left, .box .right {
    display: flex;
    flex: 1;

    .left {
    flex-direction: column;
    width: 40%;
    padding-right: 2rem;
    margin-left: 10rem;
    margin-bottom: 6.950rem;
  }

  .right {
    flex-direction: column;
    width: 40%;
    padding-left: 2rem;
    margin-right: 15.938rem;
  }

    .box-question {
      margin-top: 3.75rem;
      width: 20rem;
      height: 15rem;
      align-items: center;
      align-content: center;
    }

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

    input[type="radio"] {
      display: inline;
      margin: auto 0;
    }
    label {
      display: inline;
      margin: auto 0;
      line-height: 2;
      cursor: pointer;
      color: #535353;
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

  button {
    border: 0;
    border-radius: 0.625rem;
    padding: 0.75rem 2rem;
    font-weight: 700;
    background: var(--orange-main);
    color: #ffffff;
    width: 10.625rem;
    float: right;
    margin-top: 4.375rem;
    margin-left: 11rem;


    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
      background: var(--orange-lighter);
    }
  }
`;

export const Question = styled.h3`
    /* height: 5.313rem; */
    /* margin-top: 2.813rem; */
    padding: ${props => props.padding || "1rem"};
    text-align: center;
    font-size: 0.875rem;  
    font-weight: 700;
    font-style: normal;
    background: var(--blue-lighter);
    color: #ffffff;
    border-radius: 1.25rem;
`;