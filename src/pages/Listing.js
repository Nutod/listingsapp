import React from 'react'
import { useParams } from 'react-router'
import Layout from 'src/components/Layout'
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

  return (
    <Layout>
      <ListingWrapper>
        <h2>Listing with an id</h2>
      </ListingWrapper>
    </Layout>
  )
}
