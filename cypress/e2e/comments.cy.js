describe('Automation Panda Comments Section Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
    })
  
    it('should navigate to the first blog post and display the comments section', () => {
      cy.get('.entry-title a').first().click()
      cy.url().should('include', '/202')
      cy.get('#comments').should('be.visible')
    })
  
    it('should allow a user to post a comment (if applicable)', () => {
      cy.get('.entry-title a').first().click()
      cy.url().should('include', '/202')
      cy.get('#comments').should('be.visible')
  
      // Fill out and submit the comment form (if available)
      // Note: Adjust selectors based on the actual form fields on the site
      cy.get('input[name="author"]').type('Test User')
      cy.get('input[name="email"]').type('testuser@example.com')
      cy.get('textarea[name="comment"]').type('This is a test comment.')
      cy.get('input[name="submit"]').click()
      
      // Verify the comment appears (if applicable)
      // cy.get('.comment-list').should('contain', 'This is a test comment.')
    })
  })
  