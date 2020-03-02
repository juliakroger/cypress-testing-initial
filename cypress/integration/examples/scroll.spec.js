describe('Scroll on the Page', () => {
	it('should scroll down and up on the page', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/', {
			timeout: 10000
		})

		cy.wait(1000)
		cy.get('#submit-button').scrollIntoView()
		cy.wait(1000)
		cy.get('.main-content').scrollIntoView()
	})
})
