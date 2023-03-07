/// <reference types="cypress" />


describe('Should log in to Lego account', () => {
    beforeEach(() => {
      cy.visit("/");
      cy.acceptEnterPopups(); 
    });

    // test nie przechodzi na przegladarce electron ?! lego wykryło test bota 

    it('Should be correctly log in to Lego account ', () => {
        cy.get('[fill-rule="nonzero"]').click();
        cy.get('[data-test="legoid-login-button"]').click();
        cy.get('[name="username"]').type("testlego123456@gmail.com");
        cy.get('[name="password"]').type("Rujupyse123!");
        cy.get('[data-testid="loginBtn"]').click();
        cy.get("h1").should("have.text", "We�re sorry for the interruption");
    });
    
});