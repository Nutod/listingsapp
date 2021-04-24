import { css } from 'styled-components'

export const flex = css`
  display: flex;

  justify-content: var(--flex-justify, space-between);
  align-items: var(--flex-align, center);

  gap: var(--gap, 0.2em);
`
