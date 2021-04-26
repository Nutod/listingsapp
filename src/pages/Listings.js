import React from 'react'
import styled from 'styled-components'
import Card from 'src/components/Card'
import Layout from 'src/components/Layout'
import { container, grid } from 'src/styles/utils'

const ListingsGrid = styled.div`
  ${container};
  ${grid};
`

export default function Listings() {
  return (
    <Layout>
      <ListingsGrid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ListingsGrid>
    </Layout>
  )
}
