import React from 'react'
import { mount } from '@cypress/react'
import { BrowserRouter } from 'react-router-dom'
import Error from 'src/components/Error'

it('renders error text', () => {
  const errorText = 'Something went wrong'
  mount(
    <BrowserRouter>
      <Error text={errorText} />
    </BrowserRouter>,
  )
  cy.get('p').contains(errorText)
})
