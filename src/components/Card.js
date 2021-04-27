import React from 'react'
import { Link } from 'react-router-dom'
import { flow } from 'src/styles/utils'
import styled from 'styled-components'

const CardWrapper = styled.div`
  background-color: var(--color-secondary);
  padding: var(--space-400);
  color: var(--color-white);

  ${flow}
`

export default function Card({ data }) {
  const { title, imageUrl, content, id } = data

  return (
    <CardWrapper>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{`${content.substring(0, 100)}...`}</p>
      <div>
        <Link to={`${id}`}>View</Link>
      </div>
    </CardWrapper>
  )
}
