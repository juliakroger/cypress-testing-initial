describe('Should render login page correcty', () => {
	it('should load page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 })
		cy.clearCookies({ log: true })
		cy.clearLocalStorage('item', { log: true })
		cy.title().should('include', 'Zero - Log in')
	})

	it('should check correct url', () => {
		cy.url().should('include', 'login.html')
	})

	it('should check for correct elements on the page', () => {
		cy.get('h3')
			.should('be.visible')
			.and('contain', 'Log in to ZeroBank')

		cy.get('#user_login').should('be.visible')
		cy.get('#user_password').should('be.visible')
		cy.get('#user_remember_me').should('be.visible')
		cy.get('input').should('be.visible')
		cy.get('a').contains('Forgot your password ?')
	})
})

describe('Login page with login error', () => {
	it('should fill username', () => {
		cy.get('#user_login').as('username')
		cy.get('@username').clear()
		cy.get('@username').type('invalid name', { delay: 50 })
	})

	it('should fill password', () => {
		cy.get('#user_password').as('password')
		cy.get('@password').clear()
		cy.get('@password').type('pass', { delay: 50 })
	})

	it('should mark checkbox', () => {
		cy.get('#user_remember_me').click()
	})

	it('should submit the form', () => {
		cy.get('input')
			.contains('Sign in')
			.click()
	})

	it('should display error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.')
		cy.wait(1000)
	})
})

describe('should trigger forgot password', () => {
	it('should trigger forgot password', () => {
		cy.get('a')
			.contains('Forgot your password ?')
			.click()
	})

	it('should be on forgot password page', () => {
		cy.url().should('include', 'forgot-password.html')
		cy.title().should('include', 'Zero - Forgotten Password')
	})

	it('should fill email', () => {
		cy.get('#user_email').as('email')
		cy.get('@email').clear()
		cy.get('@email').type('teste@mail.com', { delay: 50 })
		cy.wait(1000)
	})

	it('should submit the form', () => {
		cy.get('input')
			.contains('Send Password')
			.click()
	})

	it('should render submit has sent message', () => {
		cy.contains(
			'Your password will be sent to the following email: teste@mail.com'
		)
	})
})

describe('should login with cypress commands', () => {
	it('should load the login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 })
	})

	it('should use loggin command', () => {
		cy.login('username', 'password')
	})

	it('should log into the application', () => {
		cy.get('.dropdown-toggle').contains('username')
	})
})
