import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #F0F2F5;
  --red: #E52E4D;
  --blue: #5429CC;
  --blue-light: #6933FF;
  --text-title: #363F5F;
  --text-body: #969CB3;
  --shape: #FFFFFF;
  --green: #33CC95;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &::after,
  &::before {
    box-sizing: inherit;
  }
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%; // 15px
  }

  @media (max-width: 720px) {
    font-size: 87.5%; // 14px
  }
}

body {
  background: var(--background);
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`
