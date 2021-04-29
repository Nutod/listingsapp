import { breakpoints } from '../constants'

export const mediaQueries = key => {
  return style => `@media (min-width: ${breakpoints[key]}) { ${style} }`
}
