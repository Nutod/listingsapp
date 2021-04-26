import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="users">Users</Link>
        </li>
        <li>
          <Link to="profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  )
}
