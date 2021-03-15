import { createGlobalStyle, css } from "styled-components"

export const GlobalStyle = createGlobalStyle`
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

${({ theme }) => css`
  body {
    background: ${theme.colors.background};
  }

  body, input, textarea, button {
    font-family: ${theme.font.family};
    font-weight: ${theme.font.normal};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: ${theme.font.bold};
  }
`}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`
