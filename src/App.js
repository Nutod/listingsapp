import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { FullPageSpinner } from './components/FullPageSpinner'
import { useAuthContext } from './context/useAuth'

const AuthenticatedApp = React.lazy(() =>
  import(/* webpackPrefetch: true */ './authenticated-app'),
)

const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

export default function App() {
  const { user } = useAuthContext()

  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}
