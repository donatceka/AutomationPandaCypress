describe('Automation Panda Pagination Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/blog/')
    })
  
    it('should display pagination controls', () => {
      cy.get('.pagination').should('be.visible')
    })
  
    it('should navigate to the next page of posts', () => {
      cy.get('.pagination a.next').click()
      cy.url().should('include', '/page/2/')
      cy.get('.post').should('have.length.greaterThan', 0)
    })
  })
  