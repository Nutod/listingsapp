import React from 'react'
import styled from 'styled-components'
import Card from 'src/components/Card'
import Layout from 'src/components/Layout'
import { container, grid } from 'src/styles/utils'
import Error from 'src/components/Error'
import Loading from 'src/components/Loading'

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
    setLoading(true)

    fetch('http://fakeapi.jsonparseronline.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json.slice(0, 10))
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
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
