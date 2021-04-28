import { flex } from 'src/styles/utils'
import styled from 'styled-components'
import Loading from './Loading'

const ErrorWrapper = styled.div`
  min-height: 100vh;

  ${flex}
`

export function FullPageSpinner() {
  return (
    <ErrorWrapper>
      <Loading text="Loading Application" />
    </ErrorWrapper>
  )
}
