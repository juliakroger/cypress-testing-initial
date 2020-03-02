class BasePage {
	static loadHomePage() {
		cy.visit('https://devexpress.github.io/testcafe/example/', {
			timeout: 10000
		})
	}

	static wait(number) {
		cy.wait(number)
	}
}

class HomePage extends BasePage {
	static scrollToBottom() {
		cy.get('#submit-button').scrollIntoView()
	}

	static scrollToTop() {
		cy.get('.main-content').scrollIntoView()
	}
}

describe('Abstraction with Classes', () => {
	before(() => {
		HomePage.loadHomePage()
	}) // only before the describe

	after(() => {}) // only after the describe

	beforeEach(() => {
		HomePage.wait(1000)
	}) // before each it block

	afterEach(() => {}) // after each it block

	it('should scroll down page', () => {
		HomePage.scrollToBottom()
	})

	it('should scroll top page', () => {
		HomePage.scrollToTop()
	})
})

describe('Skip tests', () => {
	before(() => {
		HomePage.loadHomePage()
	})

	beforeEach(() => {
		HomePage.wait(1000)
	})

	it('should scroll down page', () => {
		HomePage.scrollToBottom()
	})

	it('should scroll top page', () => {
		HomePage.scrollToTop()
	})

	it.skip('should be skiped', () => {
		// do something
	})
})

describe('Run only one teste', () => {
	before(() => {
		HomePage.loadHomePage()
	})

	beforeEach(() => {
		HomePage.wait(1000)
	})

	it('should scroll down page', () => {
		HomePage.scrollToBottom()
	})

	// it.only('should scroll top page', () => {
	// 	HomePage.scrollToTop()
	// })
})
