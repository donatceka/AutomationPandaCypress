describe('Automation Panda Link Validation Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
    })
  
    it('should verify that all navigation links are valid', () => {
      cy.get('#site-navigation a').each(($el) => {
        cy.request($el.prop('href')).its('status').should('eq', 200)
      })
    })
  
    it('should verify that all homepage links are valid', () => {
      cy.get('a').each(($el) => {
        cy.request($el.prop('href')).its('status').should('eq', 200)
      })
    })
  })
  