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
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  // Move this to React Query
  React.useEffect(() => {
    fetch('http://fakeapi.jsonparseronline.com/posts')
      .then(response => response.json())
      .then(json => {
        setLoading(false)
        setData(json.slice(0, 10))
      })
      .catch(error => {
        setError(error)
        console.error(error)
      })
  }, [])

  if (loading) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <p>Something went wrong!</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <ListingsGrid>
        {data.map(item => (
          <Card data={item} key={item.id} />
        ))}
      </ListingsGrid>
    </Layout>
  )
}
