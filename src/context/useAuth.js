import React from 'react'
import constate from 'constate'

// Use this in production
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

  // React.useEffect(() => {
  //   ;(async () => {
  //     const generatedUser = await userGenerator()

  //     // console.log(generatedUser)
  //     setUser(generatedUser)
  //   })()
  // }, [])

  return { user, setUser }
}

export const [AuthContextProvider, useAuthContext] = constate(useAuth)
