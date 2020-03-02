describe('Working with time', () => {
	it('should override the current time', () => {
		const date = new Date(2020, 3, 10).getTime() //return a timestamp
		cy.clock(date)
	})
})
