
describe('My First Cypress Test', function() {
    it('Visits the Example demp page and verifiy the title of the page', function() {
    //Visit the Example Website
    cy.visit("https://example.com")
    // Verify the title of the web page
    cy.title().should('eq', 'Example Domain')
})
})
