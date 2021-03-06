import { css } from 'styled-components'

export const ELEMENTS = css`
  button {
    all: unset;
    color: var(--btn-clr, var(--textColor));
    background: var(--btn-bg-clr, var(--color-primary));
    border: none;
    border-radius: 2px;
    padding: 9px 30px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      box-shadow: var(--elevation-three);
    }

    &:focus {
      box-shadow: 0px 0px 0px 1px hsla(1deg, 100%, 71%, 0.6),
        0px 0px 0px 5px hsla(1deg, 100%, 71%, 0.5);
    }

    &:active {
      transform: translateY(1px);
    }
  }

  a {
    text-decoration: none;
    color: var(--textColor);
    border-bottom: 2px solid var(--color-primary);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
      color: var(--color-primary);
    }

    &:focus {
      outline: 2.5px dotted var(--color-secondary);
    }
  }

  input[type='text'],
  input[type='email'],
  input[type='password'],
  input[type='number'],
  textarea,
  select {
    width: 100%;

    border: 2px solid var(--gray-300);
    border-radius: 4px;
    padding: 5px 8px;

    transition: all 0.2s;

    &:focus {
      outline: none;
      border: 2px solid var(--color-primary);
      box-shadow: 0px 0px 0px 3.5px var(--color-primary-glare);
    }
  }
`
