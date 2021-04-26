import React from 'react'
import { flow } from 'src/styles/utils'
import styled from 'styled-components'

const CardWrapper = styled.div`
  background-color: var(--color-secondary);
  padding: var(--space-400);
  color: var(--color-white);

  ${flow}
`

export default function Card() {
  return (
    <CardWrapper>
      <h3>Title</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci est
        harum fugiat cumque veritatis neque iure provident et earum hic.
      </p>

      <h4>Heading 4</h4>
      <div>
        <a href="">Link</a>
      </div>
    </CardWrapper>
  )
}
