import React from 'react'
import Layout from './Layout'

export default function Loading({ text = 'Loading...' }) {
  return (
    <Layout>
      <p style={{ textAlign: 'center' }}>{text}</p>
    </Layout>
  )
}
