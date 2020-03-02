describe('Write Data to JSON', () => {
	it('should write data into JSON', () => {
		cy.writeFile('log.json', { name: 'Mike', age: 25 })
	})
})

describe('Read JSON file Data', () => {
	it('should read data into JSON', async () => {
		const user = await cy.readFile('log.json')

		expect(user.age).to.equal(25)
		expect(user.name).to.equal('Mike')
	})

	it('should read data into JSON in another way', () => {
		cy.readFile('log.json')
			.its('age')
			.should('eq', 25)

		cy.readFile('log.json')
			.its('name')
			.should('eq', 'Mike')
	})
})

describe('Browser Document content', () => {
	it('shoud read and verify browser document content', () => {
		cy.visit('https://example.com')
		cy.wait(2000)

		cy.document()
			.its('contentType')
			.should('eq', 'text/html')

		cy.document()
			.should('have.property', 'charset')
			.and('eq', 'UTF-8')
	})
})
