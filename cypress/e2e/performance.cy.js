describe('Automation Panda Page Load Time Tests', () => {
    it('should load the homepage within acceptable time', () => {
      cy.visit('https://automationpanda.com/', {
        onBeforeLoad(win) {
          win.performance.mark('start-loading')
        },
        onLoad(win) {
          win.performance.mark('end-loading')
          win.performance.measure('pageLoad', 'start-loading', 'end-loading')
        }
      })
      cy.window().then((win) => {
        const performance = win.performance.getEntriesByName('pageLoad')[0]
        expect(performance.duration).to.be.lessThan(2000) // Check that load time is under 2 seconds
      })
    })
  })
  