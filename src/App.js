import styled from 'styled-components'
import { container } from './styles/utils/container'
import { flow } from './styles/utils/flow'

const Wrapper = styled.div`
  ${container}
  ${flow}

  background: var(--color-primary);
  padding: var(--space-100) 0;
`

export default function App() {
  return (
    <Wrapper>
      <h1>Header</h1>
    </Wrapper>
  )
}
