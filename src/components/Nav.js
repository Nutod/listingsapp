import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { flex } from 'src/styles/utils'
import { useAuthContext } from 'src/context/useAuth'

import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'

const NavWrapper = styled.nav`
  ul {
    list-style: none;

    --gap: 1rem;

    ${flex}
    padding-top: 6px;
  }
`

export default function Nav() {
  const { user, setUser } = useAuthContext()

  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <NavWrapper>
      <ul>
        {user ? (
          <>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <button onClick={() => setUser(null)}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => setUser({ name: 'Nutod' })}>Login</button>

            <Dialog isOpen={showDialog} onDismiss={close}>
              <button className="close-button" onClick={close}>
                {/* <VisuallyHidden>Close</VisuallyHidden> */}
                <span aria-hidden>×</span>
              </button>
              <p>Hello there. I am a dialog</p>
            </Dialog>
          </>
        )}
      </ul>
    </NavWrapper>
  )
}
