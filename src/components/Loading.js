import React from 'react'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
  min-height: 100vh;

  display: grid;
  place-content: center;
`

export default function Loading({ text = 'Loading...' }) {
  return (
    <LoadingWrapper>
      <p>{text}</p>
    </LoadingWrapper>
  )
}
