describe('Automation Panda Site Test', () => {
  it('Visits the Automation Panda homepage and checks the title', () => {
    // Visit the Automation Panda site
    cy.visit('https://automationpanda.com/')
    
    // Verify the title of the page
    cy.title().should('include', 'Automation Panda')

    // Verify the presence of the site header
    cy.get('.site-header').should('be.visible')

    // Verify the presence of the navigation bar
    cy.get('#site-navigation').should('be.visible')

    // Click on the first post title link
    cy.get('.entry-title a').first().click()

    // Verify the URL of the post
    cy.url().should('include', '202')
  })
})
