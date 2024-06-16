describe('Automation Panda Social Media Links Tests', () => {
    beforeEach(() => {
        cy.visit('https://automationpanda.com/')
    })

    it('should have working social media links in the footer', () => {
        cy.get('footer a[href*="twitter.com"]').should('have.attr', 'href').and('include', 'twitter.com')
        cy.get('footer a[href*="linkedin.com"]').should('have.attr', 'href').and('include', 'linkedin.com')
        cy.get('footer a[href*="github.com"]').should('have.attr', 'href').and('include', 'github.com')
    })

    it('should have working social media links in the blog post', () => {
        cy.get('.entry-title a').first().click()
        cy.get('.post-content').should('be.visible')
        
        cy.get('.post-content a[href*="twitter.com"]').should('have.attr', 'href').and('include', 'twitter.com')
        cy.get('.post-content a[href*="linkedin.com"]').should('have.attr', 'href').and('include', 'linkedin.com')
    })
})
