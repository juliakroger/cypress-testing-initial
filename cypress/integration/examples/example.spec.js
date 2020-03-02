describe('Testing true', () => {
	it('true should be true', () => {
		expect(true).to.equal(true)
	})
})

describe('Testing false', () => {
	it('false should be equal false', () => {
		expect(false).to.equal(false)
	})
})

describe('Testing numbers', () => {
	it('5 should be equal 5', () => {
		expect(5).to.equal(5)
	})

	it('8 should be equal 8', () => {
		expect(8).to.equal(8)
	})
})
