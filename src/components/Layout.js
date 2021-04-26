import React from 'react'
import styled from 'styled-components'
import Header from './Header'

import { container } from 'src/styles/utils/container'
import { flow } from 'src/styles/utils/flow'

const Wrapper = styled.div`
  ${container}
  ${flow}

  background: var(--color-primary);
  padding: var(--space-100) 0;
`

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
      {/* Drop footer here */}
    </Wrapper>
  )
}
