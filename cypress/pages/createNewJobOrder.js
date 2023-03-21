class CreateJobOrder {
    jobOrderTab= "(//a[@id='menu-link-jobs'])[1]";
    verifyJobHeader= ".ui.header.item";
    newJobOrderBtn= "//button[text()='NEW JOB ORDER']";
    selectClient= "(//div[text()='Start typing Customer name...'])[1]";
    vivekClient= "//div[text()='vivek client (Logistics Department-21)']";
    jobTitle= "//input[@id='title']";
    selectContract= "//select[@id='contacts']";
    firstName= "//input[@id='first-name']";
    lastName= "//input[@id='last-name']";
    updateBtn= "(//button[text()='UPDATE'])[2]";
    verifyCreateJob= "//div[text()='EDIT JOB ORDER']";
    
    actionCreateNewJobOrder(jobtitle){
      cy.log('Action: User is able to create new job order')
      cy.xpath(this.jobOrderTab)
      .should('be.visible')
      .click()
      cy.get(this.verifyJobHeader)
      .should('include.text','JOBS')
      cy.xpath(this.newJobOrderBtn)
      .should('be.visible')
      .click()
      cy.xpath(this.selectClient)
      .should('be.visible')
      .type('vivek client')
      cy.xpath(this.vivekClient)
      .should('be.visible')
      .click()
      cy.xpath(this.jobTitle)
      .should('be.visible')
      .type(jobtitle)
      cy.xpath(this.firstName)
      .should('be.visible')
      .type('Test')
      cy.xpath(this.lastName)
      .should('be.visible')
      .type('User')
      cy.xpath(this.updateBtn)
      .should('be.visible')
      .click()
      cy.xpath(this.verifyCreateJob)
      .should('include.text','EDIT JOB ORDER')
    }
  }
  export default CreateJobOrder;