describe('Automation Panda Navigation Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
    })
  
    it('should navigate to the About page', () => {
      cy.get('#menu-item-38 a').click()
      cy.url().should('include', '/about/')
      cy.get('.page-title').should('contain', 'About Me')
    })
  
    it('should navigate to the Blog page', () => {
      cy.get('#menu-item-39 a').click()
      cy.url().should('include', '/blog/')
      cy.get('.page-title').should('contain', 'Blog')
    })
  })
  