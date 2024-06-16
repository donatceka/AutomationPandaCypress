describe('Automation Panda Broken Links Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
    })
  
    it('should not have any broken links on the homepage', () => {
      cy.get('a').each(($el) => {
        const message = $el.text()
        cy.request($el.prop('href')).its('status').should('eq', 200, { timeout: 10000 })
      })
    })
  })
  