describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('/')
    cy.get('.App-logo')
  })
})
