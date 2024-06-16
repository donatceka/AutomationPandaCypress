describe('Automation Panda Sidebar Tests', () => {
    beforeEach(() => {
      cy.visit('https://automationpanda.com/')
    })
  
    it('should display recent posts in the sidebar', () => {
      cy.get('.widget_recent_entries').should('be.visible')
    })
  
    it('should display recent comments in the sidebar', () => {
      cy.get('.widget_recent_comments').should('be.visible')
    })
  
    it('should display archives in the sidebar', () => {
      cy.get('.widget_archive').should('be.visible')
    })
  
    it('should display categories in the sidebar', () => {
      cy.get('.widget_categories').should('be.visible')
    })
  })
  