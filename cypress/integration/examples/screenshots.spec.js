describe('Screenshots', () => {
	it('should load website', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/', {
			timeout: 10000
		})
	})

	it('should take fullscreen screenshots', () => {
		cy.screenshot({ capture: 'fullPage' })
	})

	it('should take single element screenshots', () => {
		cy.get('header').screenshot()

		cy.get('#populate').screenshot()
	})
})
