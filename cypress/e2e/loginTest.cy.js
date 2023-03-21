import Login from '../pages/login'

describe('Login to the Application', () => {
    Cypress.on('uncaught:exception', () => {
      return false;
    });
    it('Login as Admin user', () => {

        cy.viewport(1400,850)  

        const login = new Login()

        login.visitUrl()
        login.actionVerifySignInPage()
        login.actionLoginAsAdmin(Cypress.env('username'),Cypress.env('password'))
        login.actionVerifyLogInAsAdmin()
    });
});