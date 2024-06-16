describe('Automation Panda Advanced Search Functionality Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
    })
  
    it('should search for a single word and display results', () => {
      cy.get('#search-form-1 input[type="search"]').type('automation{enter}')
      cy.url().should('include', '/?s=automation')
      cy.get('.search-results').should('be.visible')
    })
  
    it('should search for multiple words and display results', () => {
      cy.get('#search-form-1 input[type="search"]').type('test automation{enter}')
      cy.url().should('include', '/?s=test+automation')
      cy.get('.search-results').should('be.visible')
    })
  
    it('should search for special characters and display results', () => {
      cy.get('#search-form-1 input[type="search"]').type('cypress@testing{enter}')
      cy.url().should('include', '/?s=cypress%40testing')
      cy.get('.search-results').should('be.visible')
    })
  })
  