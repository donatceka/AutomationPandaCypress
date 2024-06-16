describe('Automation Panda Home Page Content Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
    })
  
    it('should display the site header', () => {
      cy.get('.site-header').should('be.visible')
    })
  
    it('should display the navigation bar', () => {
      cy.get('#site-navigation').should('be.visible')
    })
  
    it('should display the main content area', () => {
      cy.get('#main').should('be.visible')
    })
  })
  