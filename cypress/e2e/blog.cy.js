describe('Automation Panda Blog Post Interaction Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
    })
  
    it('should navigate to the first blog post', () => {
      cy.get('.entry-title a').first().click()
      cy.url().should('include', '/202')
      cy.get('.post-content').should('be.visible')
    })
  
    it('should navigate to the second blog post', () => {
      cy.get('.entry-title a').eq(1).click()
      cy.url().should('include', '/202')
      cy.get('.post-content').should('be.visible')
    })
  })
  