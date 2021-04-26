import React from 'react'
import styled from 'styled-components'
import Header from './Header'

import { container } from 'src/styles/utils/container'
import { flow } from 'src/styles/utils/flow'

const Wrapper = styled.div`
  ${container}
  ${flow}
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
