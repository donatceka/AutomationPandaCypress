describe('Automation Panda Header Links Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
    })
  
    it('should navigate to the About page', () => {
      cy.get('#menu-item-38 a').click()
      cy.url().should('include', '/about/')
    })
  
    it('should navigate to the Blog page', () => {
      cy.get('#menu-item-39 a').click()
      cy.url().should('include', '/blog/')
    })
  })
  