describe('Login with Fixtures data', () => {
	it('should load page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 })
	})

	it('should submit the form', () => {
		cy.get('#user_login').clear()
		cy.get('#user_password').clear()

		cy.fixture('user').then(user => {
			const username = user.name
			const password = user.password

			cy.get('#user_login').type(username, { delay: 50 })
			cy.get('#user_password').type(password, { delay: 50 })
		})

		cy.contains('Sign in').click()
	})

	it('should display error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.')
	})
})
