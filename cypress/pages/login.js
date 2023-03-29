class Login {
    username= "//input[@id='loginControl_t_username']";
    password= "//input[@id='loginControl_t_password']";
    loginBtn= "//button[text()='Login']";
    sidebar= "//div[text()='Tasks']";
    verifyHeader= "(//a[text()='ACTIVITY'])[1]";
    profileDropdownIcon= "//div[@id='account-popup-trigger']";
    verifyDropdown= "(//h4[text()='My Account'])[1]";
    viewYourProfileBtn= "(//p[text()='View your profile'])[1]";
    verifyAdminRole= "//span[text()=' Admin']";
    
    visitUrl(){
      cy.visit(Cypress.env('baseUrl'))
    }
  
    actionVerifySignInPage(){
      cy.log('Action: verify that user is redirecting to sign In page after visit application url')
      cy.url().should('include', '/app/home')
      cy.xpath(this.loginBtn)
      .should('include.text','Login')
    }

    actionLoginAsAdmin(username,password){
      cy.log('Aciton: Login as Admin user')
      cy.xpath(this.username)
      .should('be.visible')
      .clear()
      .type(username)
      cy.xpath(this.password)
      .should('be.visible')
      .clear()
      .type(password)
      cy.xpath(this.loginBtn)
      .should('be.visible')
      .click()  
      cy.xpath(this.sidebar)
      .should('include.text','Tasks')
      cy.xpath(this.verifyHeader)
      .should('include.text','ACTIVITY')
    }
    actionVerifyLogInAsAdmin(){
      cy.log('Action: verify that user is log in as admin')
      cy.xpath(this.profileDropdownIcon)
      .should('be.visible')
      .click()
      cy.xpath(this.verifyDropdown)
      .should('include.text','My Account')
      cy.xpath(this.viewYourProfileBtn)
      .should('be.visible')
      .click()
      cy.xpath(this.verifyAdminRole)
      .should('include.text',' Admin')
    }
  }
  export default Login;