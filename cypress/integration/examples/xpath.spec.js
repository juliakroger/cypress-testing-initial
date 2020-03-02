describe('Xpath with cypress', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html', { timeout: 10000 })
	})

	it('should click on element using xpath', () => {
		cy.xpath(`//button[@id="signin_button"]`).should('be.visible')
		cy.xpath(`//button[@id="signin_button"]`).click()
	})

	it('should display login form', () => {
		cy.xpath(`//form`).should('have.length', 1)
		cy.xpath(`//h3`).should('be.visible')
		cy.xpath(`//input[@id="user_login"]`).should('be.visible')
		cy.xpath(`//input[@id="user_password"]`).should('be.visible')
	})
})
