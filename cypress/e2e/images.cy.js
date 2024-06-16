describe('Automation Panda Image Load Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
    })
  
    it('should load all images on the homepage', () => {
      cy.get('img').each(($el) => {
        cy.wrap($el).should('be.visible')
        cy.wrap($el).should('have.prop', 'naturalWidth').and('be.greaterThan', 0)
      })
    })
  
    it('should load images in the first blog post', () => {
      cy.get('.entry-title a').first().click()
      cy.get('.post-content img').each(($el) => {
        cy.wrap($el).should('be.visible')
        cy.wrap($el).should('have.prop', 'naturalWidth').and('be.greaterThan', 0)
      })
    })
  })
  