import Login from '../pages/login'
import Checkin  from '../pages/clockIn';

describe('Click in time on confirmed job', () => {
    Cypress.on('uncaught:exception', () => {
      return false;
    });
    it('clock in time', () => {

        cy.viewport(1400,900)  

        const login = new Login()
        const ch= new Checkin()

        const uuid = () => Cypress._.random(0, 1e4)
        const id = uuid()
        const jobtitle = `Test ${id}`

        login.visitUrl()
        ch.actionLoginAsClient1()
        ch.actionClinetCreateJob(jobtitle)

    });
});