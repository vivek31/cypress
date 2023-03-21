class CreateJob {
    jobQuickEditBtn= "//a[text()='Job Quick Edit']";
    selectSkill= "//select[@class='select span-16 grouped-list']";
    jobTitle= "//input[@id='Title']";
    positionCount= ".numeric-positions.poistionCount";
    plusIcon= "//img[@class='f-right']";
    verifyCreatedJob= "//span[text()='Successfully added job!']";
  
    actionCreateNewJob(){
      cy.log('Action: User is able to create new job')
      cy.xpath(this.jobQuickEditBtn)
      .should('be.visible')
      .click()
      cy.xpath(this.selectSkill)
      .should('be.visible')
      .select('automation')
      cy.xpath(this.jobTitle)
      .should('be.visible')
      .type('QA Automation')
      cy.get(this.positionCount)
      .should('be.visible')
      .type('2')
      cy.xpath(this.plusIcon)
      .should('be.visible')
      .click()
      cy.xpath(this.verifyCreatedJob)
      .should('include.text','Successfully added job!')
    }
  }
  export default CreateJob;