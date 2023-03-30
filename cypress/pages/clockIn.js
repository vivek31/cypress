class Checkin {
    username= "//input[@id='loginControl_t_username']";
    password= "//input[@id='loginControl_t_password']";
    loginBtn= "//button[text()='Login']";
    profileDropdownIcon= "//div[@id='account-popup-trigger']";
    logoutBtn= "(//p[text()='Logout of site'])[1]";
    workspaceTab= "(//a[text()='WORKSPACE'])[1]";
    confirmedJob= "//div[text()='Confirmed']";
    interestBtn= "(//button[text()='Interested'])[1]";
    offerTab= "(//a[@id='sub-menu-link-offers'])[2]"
    cancelbtn= "(//button[text()='Cancel'])[1]";
    newjobBtn= "(//button[text()='NEW JOB'])[1]";
    jobTitile= "//input[@id='title']";
    selectjobType= "//select[@id='ctl00_PageContent_employmentTypes']";
    bill= "//input[@id='bill-rate']";
    selecttime= "//select[@id='bill-rate-per']";
    selectsector= "//select[@id='industry']";
    anywhereCheckbox= "//label[@for='work-location-anywhere']/../input[2]";
    inviteBtn= "//button[@id='open-providers-dialog']";
    makeOfferBtn= "//span[text()='Make Offer']";
    postBtn= "//button[text()='POST JOB']"
  
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
    actionLoginAsClient1(){
      cy.log('Aciton: Login as Admin user')
      cy.xpath(this.username)
      .should('be.visible')
      .clear()
      .type('qa3.client')
      cy.xpath(this.password)
      .should('be.visible')
      .clear()
      .type('Nextcrew@1')
      cy.xpath(this.loginBtn)
      .should('be.visible')
      .click()  
    }
    actionInterest(){
      cy.xpath(this.workspaceTab)
      .click()
      cy.xpath(this.offerTab)
      .click()
      cy.xpath(this.interestBtn)
      .click()
      cy.xpath(this.cancelbtn)
      .click()
    }
    actionClinetCreateJob(jobtitle){
      cy.xpath("(//a[@id='menu-link-jobs'])[1]")
      .click()
      cy.xpath(this.newjobBtn)
      .click()
      cy.xpath(this.jobTitile)
      .type(jobtitle)
      cy.xpath(this.selectjobType)
      .select('Temporary')
      cy.xpath(this.bill).scrollIntoView()
      .type('20.00')
      cy.xpath(this.selecttime)
      .select('Day')
      cy.xpath(this.selectsector)
      .select('0001')
      cy.xpath(this.anywhereCheckbox)
      .should('be.visible')
      .click()
      cy.xpath(this.inviteBtn).scrollIntoView()
      .click()
      .wait(5000)
      cy.xpath("(//input[@name='provider-choice'])[1]").click()
      cy.xpath(this.makeOfferBtn)
      .click()
      cy.xpath(this.postBtn)
      .click()
    }



  }
  export default Checkin;