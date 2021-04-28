import React from 'react'
import constate from 'constate'

function useAuth() {
  const [user, setUser] = React.useState({})

  return { user, setUser }
}

export const [AuthContextProvider, useAuthContext] = constate(useAuth)
