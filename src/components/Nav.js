import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { flex } from 'src/styles/utils'
import { useAuthContext } from 'src/context/useAuth'

const NavWrapper = styled.nav`
  ul {
    list-style: none;

    --gap: 1rem;

    ${flex}
    padding-top: 6px;
  }
`

export default function Nav() {
  const { user } = useAuthContext()

  return (
    <NavWrapper>
      <ul>
        {user && (
          <>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </>
        )}
        <button>Login</button>
      </ul>
    </NavWrapper>
  )
}
