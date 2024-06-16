describe('Automation Panda Tags and Categories Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
    })
  
    it('should navigate to a tag page and display relevant posts', () => {
      cy.get('.tag-cloud a').first().click()
      cy.url().should('include', '/tag/')
      cy.get('.tag-title').should('be.visible')
      cy.get('.post').should('have.length.greaterThan', 0)
    })
  
    it('should navigate to a category page and display relevant posts', () => {
      cy.get('.cat-item a').first().click()
      cy.url().should('include', '/category/')
      cy.get('.category-title').should('be.visible')
      cy.get('.post').should('have.length.greaterThan', 0)
    })
  })
  