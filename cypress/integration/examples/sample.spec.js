describe('Browser actions', () => {
	it('should load correct url', () => {
		cy.visit('http://example.com', { timeout: 10000 })
	})

	it('should check correct url', () => {
		cy.url().should('include', 'example.com')
	})

	it('should check for correct element on the page', () => {
		cy.get('h1').should('be.visible')
		cy.get('h1').should('contain', 'Example Domain')
		// cy.get('h1').should('contain', 'Something')
	})

	it('should wait for 3 seconds', () => {
		cy.wait(300)
	})

	it('should pause the execution', () => {
		// cy.pause()
		// use it for debugging
	})

	it('should throw timeout error', () => {
		// cy.visit('http://example.com', { timeout: 1 })
	})

	it('should log and reload', () => {
		cy.log('Message')
		cy.reload()
	})
})
