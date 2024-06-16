describe('Automation Panda Contact Page Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
      cy.get('footer').contains('Contact').click()
      cy.url().should('include', '/contact/')
    })
  
    it('should display the contact form', () => {
      cy.get('form').should('be.visible')
    })
  
    it('should allow the user to fill out and submit the contact form', () => {
      cy.get('form input[name="your-name"]').type('Test User')
      cy.get('form input[name="your-email"]').type('testuser@example.com')
      cy.get('form textarea[name="your-message"]').type('This is a test message.')
      cy.get('form').submit()
      // You can add an assertion here to check for a successful submission message if applicable
    })
  })
  