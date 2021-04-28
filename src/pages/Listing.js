import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import Layout from 'src/components/Layout'
import Loading from 'src/components/Loading'
import Error from 'src/components/Error'
import { container, flow } from 'src/styles/utils'
import { client } from 'src/lib/api-client'

const ListingWrapper = styled.div`
  --content-space: 2rem;

  ${flow}
  ${container} /* max-width: 500px; */

  margin-top: var(--space-400);
`

export default function Listing() {
  const { id } = useParams()

  const { isLoading, isError, data } = useQuery(['lists', id], () =>
    client(`posts/${id}`),
  )

  console.log(data)

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <Error />
  }

  return (
    <Layout>
      <ListingWrapper>
        <h2>{data.title}</h2>
        <img src={data.imageUrl} alt={data.title} />
        <p>{data.content}</p>
      </ListingWrapper>
    </Layout>
  )
}
