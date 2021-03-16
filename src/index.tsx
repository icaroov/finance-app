import { ThemeProvider } from 'styled-components'
import { render } from 'react-dom'
import { createServer } from 'miragejs'

import App from './App'
import { GlobalStyle } from './styles/global'
import theme from './styles/theme'

createServer({
  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => ({
      reminders: [{ id: 1, title: 'teste 1', amount: 400, type: 'food' }],
    }))
  },
})

render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById('root')
)
