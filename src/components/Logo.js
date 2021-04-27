import React from 'react'
import { Link } from 'react-router-dom'
import { flex } from 'src/styles/utils'
import styled from 'styled-components'

const LogoWrapper = styled.div`
  --flex-justify: flex-start;
  ${flex}

  padding: var(--space-100) 0;
  color: var(--color-secondary);

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  h2 {
    padding-top: 6px;
  }
`

export default function Logo() {
  return (
    <LogoWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
      <h2>Listings</h2>
    </LogoWrapper>
  )
}
