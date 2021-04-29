import React from 'react'
import Layout from 'src/hoc/Layout'
import styled from 'styled-components'
import { container } from 'src/styles/utils'

const UsersWrapper = styled.div`
  ${container}
`

export default function Users() {
  return (
    <Layout>
      <UsersWrapper>
        <h1>Users</h1>
      </UsersWrapper>
    </Layout>
  )
}
