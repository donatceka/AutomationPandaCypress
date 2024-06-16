describe('Automation Panda About Page Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
      cy.get('#menu-item-38 a').click() // Assuming the About link has this selector
    })
  
    it('should navigate to the About page', () => {
      cy.url().should('include', '/about/')
    })
  
    it('should display the About page content', () => {
      cy.get('.page-title').should('contain', 'About Me')
    })
  })
  