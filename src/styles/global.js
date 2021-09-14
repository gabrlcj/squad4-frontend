import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export const GlobalStyle = createGlobalStyle`
  :root {
    --orange-main: #fe5517;
    --orange-lighter: #fe662e;
    --orange-subtle: #FE885C;

    --green: #51a259;

    --blue-main: #36357e;
    --blue-lighter: #5251a2;
    --blue-darker: #2a2962;
    --blue-subtle: #a8a8d0;

    --background: #fff;
    --background-focus: #FE4400a9;
    --alternative: #b4ccff;
    --text: #363033;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    min-height: 100vh;
    background: var(--background);
    font: 700 1rem 'Montserrat', sans-serif;
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  input {
    text-align: center;
    padding: 0.75rem 1.75rem;
    border: 0;
    border-radius: 0.25rem;
    outline: transparent;
    margin-top: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &:focus {
      outline: 3px solid var(--background-focus);
    }

    &::placeholder {
      font-weight: 700;
    }
  }


  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
