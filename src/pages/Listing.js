import React from 'react'
import { useParams } from 'react-router'
import Layout from 'src/components/Layout'
import Loading from 'src/components/Loading'
import { container } from 'src/styles/utils'
import styled from 'styled-components'

const ListingWrapper = styled.div`
  ${container}
`

export default function Listing() {
  const { id } = useParams()
  const [data, setData] = React.useState()
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  // Move this to React Query
  React.useEffect(() => {
    fetch('http://fakeapi.jsonparseronline.com/posts/1')
      .then(response => response.json())
      .then(json => {
        setLoading(false)
        setData(json)
      })
      .catch(error => {
        setLoading(false)
        setError(error)
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
        <h2>Listing with an id</h2>
      </ListingWrapper>
    </Layout>
  )
}
