import React from 'react'
import { flex } from 'src/styles/utils'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
  min-height: 100vh;

  ${flex}
`

export function FullPageErrorFallback({ error }) {
  return (
    <ErrorWrapper>
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </ErrorWrapper>
  )
}
