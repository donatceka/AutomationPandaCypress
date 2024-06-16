describe('Automation Panda Homepage Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
    })
  
    it('should have the correct title', () => {
      cy.title().should('include', 'Automation Panda')
    })
  
    it('should display the site header', () => {
      cy.get('.site-header').should('be.visible')
    })
  
    it('should display the navigation bar', () => {
      cy.get('#site-navigation').should('be.visible')
    })
  })
  