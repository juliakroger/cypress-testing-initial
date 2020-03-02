describe('Browser actions', () => {
	it('should loads book website', () => {
		cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
		cy.url().should('include', 'books.toscrape.com')
		cy.url().should('include', 'index.html')
	})

	it('should click on Travel Category correcty', () => {
		cy.get('a')
			.contains('Travel')
			.click()

		cy.get('h1').contains('Travel')
	})

	it('should display correct number of books', () => {
		cy.get('.product_pod')
			.its('length')
			.should('eq', 11)
	})

	it('should click on Poetry Category correctly', () => {
		cy.get('a')
			.contains('Poetry')
			.click()

		cy.get('h1').contains('Poetry')
	})

	it('should click on Olio book correcty', () => {
		cy.get('a')
			.contains('Olio')
			.click()

		cy.get('h1').contains('Olio')
	})

	it('should check Olio book price and number of product information', () => {
		cy.get('.price_color').contains('23.88')

		cy.get('tr')
			.its('length')
			.should('eq', 7)
	})
})
