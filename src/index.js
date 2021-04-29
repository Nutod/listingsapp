import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
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
      <BrowserRouter>
        <AuthContextProvider>
          <GlobalStyles />
          <App />
        </AuthContextProvider>
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
  rootElement,
)
