import { DataTestIds } from '../../../client/src/const'

const s = dataTestId => `[data-testid="${dataTestId}"]`

describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('/')
    cy.get(s(DataTestIds.Links.AboutPage)).click()

    // Should be on a new URL which includes '/about'
    cy.url().should('include', '/about')
  })
})
