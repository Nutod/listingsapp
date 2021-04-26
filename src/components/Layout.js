import React from 'react'
import styled from 'styled-components'
import Header from './Header'

import { flow } from 'src/styles/utils'

const LayoutWrapper = styled.div`
  --content-space: var(--space-300);

  ${flow}
`

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      {/* Drop footer here */}
    </LayoutWrapper>
  )
}
