import React from 'react'
import { flex } from 'src/styles/utils/flex'
import styled from 'styled-components'
import Logo from './Logo'
import Nav from './Nav'

const HeaderWrapper = styled.div`
  ${flex}
`

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav />
    </HeaderWrapper>
  )
}
