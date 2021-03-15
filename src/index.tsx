import { render } from "react-dom"
import App from "./App"

import { GlobalStyle } from "./styles/global"

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
)
