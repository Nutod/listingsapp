import React from 'react'
import styled from 'styled-components'
import Layout from 'src/hoc/Layout'
import { container } from 'src/styles/utils'
import { useAuthContext } from 'src/context/useAuth'

const ProfileWrapper = styled.div`
  ${container}
`

export default function Profile() {
  return (
    <Layout>
      <ProfileWrapper>
        <h1>Profile</h1>
      </ProfileWrapper>
    </Layout>
  )
}
