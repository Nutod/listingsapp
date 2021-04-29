context('Tour Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should load home page', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > div > :nth-child(3) > a').click();
    cy.get('.sc-gKckTs').click();
    cy.get('body').click();
    /* ==== End Cypress Studio ==== */
  })
})
