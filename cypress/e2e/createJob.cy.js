import Login from '../pages/login'
import CreateJobOrder from '../pages/createNewJobOrder'
import CreateJob from '../pages/createJob';

describe('Create a new job', () => {
    Cypress.on('uncaught:exception', () => {
      return false;
    });
    it('New job', () => {

        cy.viewport(1400,850)  

        const login = new Login()
        const joborder = new CreateJobOrder()
        const job = new CreateJob()

        const uuid = () => Cypress._.random(0, 1e4)
        const id = uuid()
        const jobtitle = `Test ${id}`

        login.visitUrl()
        login.actionVerifySignInPage()
        login.actionLoginAsAdmin(Cypress.env('username'),Cypress.env('password'))
        login.actionVerifyLogInAsAdmin()
        joborder.actionCreateNewJobOrder(jobtitle)
        job.actionCreateNewJob()
    });
});