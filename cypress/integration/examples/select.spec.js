describe('Select box', () => {
	it('should load website', () => {
		cy.visit('https://devexpress.github.io/testcafe/example/', {
			timeout: 10000
		})
	})

	it('should select an option from select box', () => {
		cy.get('#windows').check()
		cy.get('#macos').check()

		cy.get('#windows').should('not.be.checked')
		cy.get('#linux').should('not.be.checked')
		cy.get('#macos').should('be.checked')
	})

	it('should select dropdown', () => {
		cy.get('#preferred-interface').select('JavaScript API')
		cy.get('#preferred-interface').should('have.value', 'JavaScript API')
	})
})
