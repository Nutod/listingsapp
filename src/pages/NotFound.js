import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NotFoundWrapper = styled.div`
  min-height: 100vh;

  display: grid;
  place-content: center;
  text-align: center;
`

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <p>This page does not exist :(</p>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </NotFoundWrapper>
  )
}
