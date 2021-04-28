import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import Card from 'src/components/Card'
import Layout from 'src/components/Layout'
import { container, grid } from 'src/styles/utils'
import Loading from 'src/components/Loading'
import Error from 'src/components/Error'
import { client } from 'src/lib/api-client'

const ListingsGrid = styled.div`
  ${container};
  ${grid};
`

export default function Listings() {
  const { isLoading, isError, data } = useQuery('lists', () => client('posts'))

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <Error />
  }

  return (
    <Layout>
      <ListingsGrid>
        {data.slice(0, 10).map(item => (
          <Card data={item} key={item.id} />
        ))}
      </ListingsGrid>
    </Layout>
  )
}
