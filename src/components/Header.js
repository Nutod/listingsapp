import React from 'react'
import { flex, container } from 'src/styles/utils'
import styled from 'styled-components'
import Logo from './Logo'
import Nav from './Nav'

const HeaderWrapper = styled.div`
  ${container}
  ${flex};
`

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav />
    </HeaderWrapper>
  )
}
