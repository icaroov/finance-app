import { ThemeProvider } from 'styled-components'
import { render } from 'react-dom'

import App from './App'
import { ModalProvider } from './hooks/useModal'
import { server } from './services/fakeServer'
import { GlobalStyle } from './styles/global'
import theme from './styles/theme'

server()

render(
  <ThemeProvider theme={theme}>
    <ModalProvider>
      <App />
      <GlobalStyle />
    </ModalProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
