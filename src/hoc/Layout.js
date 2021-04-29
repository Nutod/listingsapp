import React from 'react'
import styled from 'styled-components'

import { flow } from 'src/styles/utils'

const LayoutWrapper = styled.div`
  --content-space: var(--space-300);

  ${flow}
`

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      {children}
      {/* Drop footer here */}
    </LayoutWrapper>
  )
}
