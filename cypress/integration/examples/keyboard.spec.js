describe('Keyboard press simulation', () => {
	it('should submit searchBox with pressing enter', () => {
		cy.visit('http://zero.webappsecurity.com/index.html', { timeout: 10000 })

		cy.get('#searchTerm').type('search text {enter}')
	})
})
