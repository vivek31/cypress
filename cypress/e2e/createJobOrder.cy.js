import Login from '../pages/login_page_obj'
import CreateJobOrder from '../pages/newJobOrder'

describe('Create a new job order', () => {
    Cypress.on('uncaught:exception', () => {
      return false;
    });
    it('new job order', () => {

        cy.viewport(1400,850)  

        const login =new Login()
        const job= new CreateJobOrder()

        const uuid = () => Cypress._.random(0, 1e4)
        const id = uuid()
        const jobtitle = `Test ${id}`

        login.visitUrl()
        login.actionVerifySignInPage()
        login.actionLoginAsAdmin(Cypress.env('username'),Cypress.env('password'))
        login.actionVerifyLogInAsAdmin()
        job.actionCreateNewJobOrder(jobtitle)
    });
});