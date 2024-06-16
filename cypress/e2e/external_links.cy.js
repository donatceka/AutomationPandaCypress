describe('Automation Panda External Links Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
    })
  
    it('should open external links in a new tab', () => {
      cy.get('a[target="_blank"]').each(($el) => {
        cy.wrap($el).should('have.attr', 'target', '_blank')
      })
    })
  })

  