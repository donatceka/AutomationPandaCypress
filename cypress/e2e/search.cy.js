describe('Automation Panda Search Functionality Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
    })
  
    it('should search for a term and display results', () => {
      cy.get('#search-form-1 input[type="search"]').type('testing{enter}')
      cy.url().should('include', '/?s=testing')
      cy.get('.search-results').should('be.visible')
    })
  
    it('should display a message for no search results', () => {
      cy.get('#search-form-1 input[type="search"]').type('nonexistentterm{enter}')
      cy.get('.no-results').should('be.visible')
    })
  })
  