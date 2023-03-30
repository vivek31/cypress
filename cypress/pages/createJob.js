class CreateJob {
    jobQuickEditBtn= "//a[text()='Job Quick Edit']";
    selectSkill= "//select[@class='select span-16 grouped-list']";
    jobTitle= "//input[@id='Title']";
    positionCount= ".numeric-positions.poistionCount";
    plusIcon= "//img[@class='f-right']";
    verifyCreatedJob= "//span[text()='Successfully added job!']";
    editBtn= "//img[@title='Edit Detail']";
    anywhereCheckbox= "//label[@for='work-location-anywhere']/../input[2]";
    inviteBtn= "//button[@id='open-providers-dialog']";
    checkbox= "//div[@class='selectall']/input";
    assignBtn= "(//span[text()='Assign'])[2]";
    updateBtn= "//button[@id='cmdPost']";
    makeOfferBtn= "//span[text()='Make Offer']";
    searchClient= "//input[@id='provider-search']";
    goBtn= "//button[@id='provider-search-btn']";
  
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
    actionAssignJob(){
      cy.log('Action: Assigned the job')
      cy.xpath(this.editBtn).scrollIntoView()
      .should('be.visible')
      .click()
      .wait(3000)
      cy.xpath(this.anywhereCheckbox)
      .should('be.visible')
      .click()
      cy.xpath(this.inviteBtn).scrollIntoView()
      .click()
      .wait(5000)
      cy.xpath(this.searchClient)
      .type('crew1 phoenix')
      cy.xpath(this.goBtn)
      .click()
      .wait(3000)
      cy.xpath(this.checkbox)
      .click('center','{ multiple: true } ')
      cy.xpath(this.assignBtn)
      .should('be.visible')
      .click('center','{ multiple: true } ')
      cy.xpath(this.updateBtn)
      .should('be.visible')
      .click()

    }
    makeJobOffer(){
      cy.log('Action: Make a job offer')
      cy.xpath(this.editBtn)
      .should('be.visible')
      .click()
      cy.xpath(this.anywhereCheckbox)
      .should('be.visible')
      .click()
      cy.xpath(this.inviteBtn).scrollIntoView()
      .click()
      .wait(5000)
      cy.xpath(this.searchClient)
      .type('crew1 phoenix')
      cy.xpath(this.goBtn)
      .click()
      .wait(3000)
      cy.xpath(this.checkbox)
      .click('center','{ multiple: true } ')
      cy.xpath(this.makeOfferBtn)
      .click()
      cy.xpath(this.updateBtn)
      .should('be.visible')
      .click()
    }
  }
  export default CreateJob;