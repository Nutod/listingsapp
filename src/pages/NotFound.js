import React from 'react'
import styled from 'styled-components'
import { flex } from 'src/styles/utils'

const NotFoundWrapper = styled.div`
  min-height: 100vh;

  --flex-justify: center;
  ${flex};
`

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <p>This page does not exist :(</p>
    </NotFoundWrapper>
  )
}
