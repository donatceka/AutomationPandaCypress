describe('Automation Panda Footer Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
    })
  
    it('should have a visible footer', () => {
      cy.get('footer').should('be.visible')
    })
  
    it('should navigate to the Contact page from the footer', () => {
      cy.get('footer').contains('Contact').click()
      cy.url().should('include', '/contact/')
      cy.get('.page-title').should('contain', 'Contact')
    })
  })
  