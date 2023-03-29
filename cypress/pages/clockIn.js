class Checkin {
    username= "//input[@id='loginControl_t_username']";
    password= "//input[@id='loginControl_t_password']";
    loginBtn= "//button[text()='Login']";
    profileDropdownIcon= "//div[@id='account-popup-trigger']";
    logoutBtn= "(//p[text()='Logout of site'])[1]";
    workspaceTab= "(//a[text()='WORKSPACE'])[1]";
    confirmedJob= "//div[text()='Confirmed']";
  
    actionSignout(){
      cy.log('Action: verify that user should be sign out from the application')
      cy.get('#large-screen-menu > #menu-link-activity').click()
      cy.xpath(this.profileDropdownIcon)
      .click()
      cy.xpath(this.logoutBtn)
      .click()
      .wait(4000)
      cy.get(':nth-child(7) > a').click()
        
    }

    actionLoginAsClient(){
      cy.log('Aciton: Login as Admin user')
      cy.xpath(this.username)
      .should('be.visible')
      .clear()
      .type('crew1.phoenix')
      cy.xpath(this.password)
      .should('be.visible')
      .clear()
      .type('Nextcrew@1')
      cy.xpath(this.loginBtn)
      .should('be.visible')
      .click()  
    }
    actionClickIn(){
      cy.log('Action; Clock in time')
      cy.xpath(this.workspaceTab)
      .click()
      cy.xpath(this.confirmedJob)
      .click()
      cy.visit('https://trinity.minutecrew.com/time-clock')
      cy.get('.form > .ui').click()
      .wait(4000)
      cy.get('.big.camera.icon').click()
      cy.xpath("//input[@data-answer='Yes']").click('center',' {force: true}')
      cy.xpath("//button[text()='NEXT']").click(' {force: true}')
      cy.xpath("//button[text()='OK']").click(' {force: true}')
    }

  }
  export default Checkin;