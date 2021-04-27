import React from 'react'
import Layout from './Layout'

export default function Error({ text = 'Something went wrong' }) {
  return (
    <Layout>
      <p style={{ textAlign: 'center' }}>{text}</p>
    </Layout>
  )
}
