import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyles } from './styles/global'

import { AuthContextProvider } from './context/useAuth'
import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <AuthContextProvider>
      <GlobalStyles />
      <App />
    </AuthContextProvider>
  </StrictMode>,
  rootElement,
)
