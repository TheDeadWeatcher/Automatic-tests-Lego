/// <reference types="cypress" />


describe('Should log in to Lego account', () => {
    beforeEach(() => {
      cy.visit("/");
      cy.acceptEnterPopups(); 
    });

    // test nie przechodzi na przegladarce electron, chrome, edge, firefox ok  ?! lego  wykryło bota 

    it.only('Should be correctly log in to Lego account ', () => {
        cy.get('[fill-rule="nonzero"]').click();
        cy.get('[data-test="legoid-login-button"]').click();
        cy.get('[name="username"]').type("testlego123456@gmail.com");
        cy.get('[name="password"]').type("Rujupyse123!");
        cy.get('[data-testid="loginBtn"]').click();
        cy.get('[fill-rule="nonzero"]').click();
        cy.url().should("eq", "https://www.lego.com/pl-pl/my-account");
    });


    it("Should faild log in to Lego account ", () => {
      cy.get('[fill-rule="nonzero"]').click();
      cy.get('[data-test="legoid-login-button"]').click();
      cy.get('[name="username"]').type("testlego123456@gmail.com");
      cy.get('[name="password"]').type("Rujupyse123!11");
      cy.get('[data-testid="loginBtn"]').click();
      cy.get(".login-error").should("contain", "hasło nie odpowiadają");
    });
    
    
});