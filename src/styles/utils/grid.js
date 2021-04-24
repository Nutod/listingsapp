import { css } from 'styled-components'

export const grid = css`
  display: grid;
  grid-template-columns: repeat(
    var(--template-columns, auto-fit),
    minmax(var(--item-size, 20rem), 1fr)
  );
  grid-gap: var(--gap, 1rem);
`
