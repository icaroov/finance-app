import { render } from "react-dom"
import { ThemeProvider } from "styled-components"
import App from "./App"

import { GlobalStyle } from "./styles/global"
import theme from "./styles/theme"

render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById("root")
)
