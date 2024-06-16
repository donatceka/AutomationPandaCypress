describe('Automation Panda Mobile Responsiveness Tests', () => {
    const viewports = ['iphone-6', 'ipad-2', [1920, 1080]]
  
    viewports.forEach((viewport) => {
      it(`should display correctly on ${viewport}`, () => {
        cy.viewport(viewport)
        cy.visit('https://automationpanda.com/')
        cy.get('header').should('be.visible')
        cy.get('#site-navigation').should('be.visible')
        cy.get('footer').should('be.visible')
      })
    })
  })
  