import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyles } from './styles/global'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
  rootElement
)
