import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { GlobalStyles } from './styles/global'

import { AuthContextProvider } from './context/useAuth'
import App from './app'

const queryClient = new QueryClient()

const rootElement = document.getElementById('root')

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <GlobalStyles />
        <App />
      </AuthContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
  rootElement,
)
