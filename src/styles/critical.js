import {css} from 'styled-components'

export const CRITICAL = css`
  :root {
    --color-primary: hsl(1, 100%, 71%);
    --color-primary-glare: hsl(1, 100%, 61%);
    --color-white: hsl(60, 100%, 100%);
    --color-secondary: hsl(259, 24%, 44%);
    --color-secondary-glare: hsl(259, 24%, 34%);
    --color-tertiary: hsl(47, 94%, 72%);
    --color-tertiary-glare: hsl(47, 94%, 62%);
    --color-black: hsl(262, 49%, 14%);
    --color-black-glare: hsl(262, 49%, 4%);
    --color-black-shade: hsl(265, 30%, 11%);

    --gray-100: hsl(210, 20%, 98%);
    --gray-200: hsl(210, 20%, 88%);
    --gray-300: hsl(210, 20%, 78%);
    --gray-400: hsl(210, 20%, 68%);
    --gray-500: hsl(210, 20%, 58%);
    --gray-600: hsl(210, 20%, 48%);
    --gray-700: hsl(210, 20%, 38%);
    --gray-800: hsl(210, 20%, 28%);

    --font-display: 'Carrois Gothic', sans-serif;
    --font-body: 'Roboto', sans-serif;

    --space: 1rem;

    --space-100: calc(0.75 * var(--space));
    --space-200: calc(1 * var(--space));
    --space-300: calc(1.33 * var(--space));
    --space-400: calc(1.77 * var(--space));
    --space-500: calc(2.36 * var(--space));
    --space-600: calc(3.15 * var(--space));
    --space-700: calc(4.2 * var(--space));
    --space-800: calc(5.6 * var(--space));

    --elevation-one: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --elevation-two: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --elevation-three: 0 10px 15px -3px rgba(0, 0, 0, 0.2),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --elevation-four: 0 20px 25px -5px rgba(0, 0, 0, 0.2),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`
