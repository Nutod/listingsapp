import React from 'react'
import { Link } from 'react-router-dom'
import { flow } from 'src/styles/utils'
import styled from 'styled-components'

const CardWrapper = styled.div`
  background-color: var(--color-secondary);
  color: var(--color-white);
  border-radius: 10px;
  box-shadow: var(--elevation-four);

  img {
    aspect-ratio: 3/2;
    /* height: max(18vh, 12rem); */
    width: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  div {
    padding: var(--space-200);
    ${flow}
  }
`

export default function Card({ data }) {
  const { title, imageUrl, content, id } = data

  return (
    <CardWrapper>
      <figure>
        <img src="https://placeimg.com/160/160/transport" alt={title} />
      </figure>
      <div>
        <h3>{title}</h3>
        <p>{`${content.substring(0, 100)}...`}</p>

        <p>
          <Link to={`${id}`}>View</Link>
        </p>
      </div>
    </CardWrapper>
  )
}
