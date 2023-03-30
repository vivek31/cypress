import Login from '../pages/login'
import CreateJobOrder from '../pages/createNewJobOrder'
import CreateJob from '../pages/createJob';
import Checkin  from '../pages/clockIn';

describe('Click in time on confirmed job', () => {
    Cypress.on('uncaught:exception', () => {
      return false;
    });
    it('clock in time', () => {

        cy.viewport(1400,900)  

        const login = new Login()
        const joborder = new CreateJobOrder()
        const job = new CreateJob()
        const ch= new Checkin()

        const uuid = () => Cypress._.random(0, 1e4)
        const id = uuid()
        const jobtitle = `Test ${id}`

        login.visitUrl()
        login.actionVerifySignInPage()
        login.actionLoginAsAdmin(Cypress.env('username'),Cypress.env('password'))
        login.actionVerifyLogInAsAdmin()
        joborder.actionCreateNewJobOrder(jobtitle)
        job.actionCreateNewJob()
        job.makeJobOffer()
        ch.actionSignout()
        ch.actionLoginAsClient()
        ch.actionInterest()
    });
});