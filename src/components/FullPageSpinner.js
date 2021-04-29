import styled from 'styled-components'
import Loading from './Loading'

const ErrorWrapper = styled.div`
  min-height: 100vh;

  display: grid;
  place-content: center;
`

export function FullPageSpinner() {
  return (
    <ErrorWrapper>
      <Loading text="Loading Application..." />
    </ErrorWrapper>
  )
}
