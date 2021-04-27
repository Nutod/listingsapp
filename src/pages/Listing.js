import React from 'react'
import { useParams } from 'react-router'
import Layout from 'src/components/Layout'
import Loading from 'src/components/Loading'
import { container, flow } from 'src/styles/utils'
import styled from 'styled-components'

const ListingWrapper = styled.div`
  --content-space: 2rem;

  ${flow}
  ${container} /* max-width: 500px; */

  margin-top: var(--space-400);
`

export default function Listing() {
  const { id } = useParams()
  const [data, setData] = React.useState()
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  // Move this to React Query
  React.useEffect(() => {
    setLoading(true)

    fetch(`http://fakeapi.jsonparseronline.com/posts/${id}`)
      .then(response => response.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (error) {
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
