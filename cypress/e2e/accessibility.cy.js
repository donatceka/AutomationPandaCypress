describe('Automation Panda Accessibility Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
    })
  
    it('should have alt attributes on all images', () => {
      cy.get('img').each(($el) => {
        cy.wrap($el).should('have.attr', 'alt')
      })
    })
  
    it('should have aria-label attributes on navigation links', () => {
      cy.get('#site-navigation a').each(($el) => {
        cy.wrap($el).should('have.attr', 'aria-label')
      })
    })
  })
  