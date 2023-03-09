/// <reference types="cypress" />

// Please run this test only on electron browser, after set  chromeWebSecurity : false - elektron passed the test  :) other browser detected the bot session  

describe('E2E - account tests', () => {
    before(function(){
      cy.fixture('loginPass').then(function(data){
        globalThis.data = data; 
      });
      cy.fixture('pagesUrl').then(function(url){
        globalThis.url = url;
      });
    });
    beforeEach(() => {
      cy.visit("/");
      cy.acceptEnterPopups(); 
    });

    it('Should be correctly log in to Lego account ', () => {
        cy.get('[fill-rule="nonzero"]').click();
        cy.get('[data-test="legoid-login-button"]').click();
        cy.get('[name="username"]').type(data.email);
        cy.get('[name="password"]').type(data.pass);
        cy.get('[data-testid="loginBtn"]').click();
        cy.get('[fill-rule="nonzero"]').click();
        cy.url().should("eq", url.accountUrl);
    });


    it("Should faild log in to Lego account ", () => {
      cy.get('[fill-rule="nonzero"]').click();
      cy.get('[data-test="legoid-login-button"]').click();
      cy.get('[name="username"]').type(data.email);
      cy.get('[name="password"]').type(data.incorectPass);
      cy.get('[data-testid="loginBtn"]').click();
      cy.get(".login-error").should("contain", "hasło nie odpowiadają");
    });
    
    
});