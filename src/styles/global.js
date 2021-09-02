import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #fc6027;
    --background-focus: #fc6027a9;
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
    font: 400 1rem 'Arial', sans-serif;
    color: var(--text);
    -webkit-font-smoothing: antialiased;

    div#root {
      min-height: 100vh;
    }
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`