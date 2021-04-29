import React from 'react'
import { mount } from '@cypress/react'
import Loading from 'src/components/Loading'

it('renders prop text', () => {
  const loadingText = 'Loading...'
  mount(<Loading text={loadingText} />)
  cy.get('p').contains(loadingText)
})
