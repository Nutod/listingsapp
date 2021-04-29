import React from 'react'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
  min-height: 100vh;

  display: grid;
  place-content: center;
`

export function FullPageErrorFallback({ error }) {
  return (
    <ErrorWrapper>
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </ErrorWrapper>
  )
}
