import React from 'react'
import constate from 'constate'

// TODO: Add Page Titles
// TODO: Add error boundary
// TODO: Use toast component
// TODO: Fix Visually Hidden accessibility

// Use something like this in production
export async function bootstrapAppData() {
  let user = null

  return user
}

export function userGenerator(delay = 1000) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ username: 'username' }), delay)
  })
}

function useAuth() {
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    ;(async () => {
      const generatedUser = await userGenerator()

      // console.log(generatedUser)
      // setUser(generatedUser)
      setLoading(false)
    })()
  }, [])

  return { user, setUser, loading }
}

export const [AuthContextProvider, useAuthContext] = constate(useAuth)
