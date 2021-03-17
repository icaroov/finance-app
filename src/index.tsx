import { ThemeProvider } from 'styled-components'
import { render } from 'react-dom'

import { ModalProvider } from './hooks/useModal'
import { TransactionProvider } from './hooks/useTransactions'

import App from './App'
import { server } from './services/fakeServer'
import { GlobalStyle } from './styles/global'
import theme from './styles/theme'

server()

render(
  <ThemeProvider theme={theme}>
    <TransactionProvider>
      <ModalProvider>
        <App />
        <GlobalStyle />
      </ModalProvider>
    </TransactionProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
