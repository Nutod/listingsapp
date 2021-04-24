import { css } from 'styled-components'

export const flow = css`
  & > * + * {
    margin-top: var(--content-space, var(--space-200));
  }
`
